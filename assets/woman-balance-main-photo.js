/* Product 641: default authentic photo plus host main-gallery mirroring.
   Identity uses productId, not the merchandising title. No cart writes. */
(()=>{
 'use strict';
 const root=document.querySelector('#special-popis[data-gl-photo-variant="woman-dark-cherry-sacek"]');
 if(!root||root.dataset.glMainPhotoBound)return;
 root.dataset.glMainPhotoBound='true';
 const known=root.getAttribute('data-gl-photo-default');
 const expected=root.getAttribute('data-gl-product-id');
 const targets=[...root.querySelectorAll('[data-gl-main-photo]')],failed=new Set();
 let queued=false;
 const show=img=>{const valid=img.complete&&img.naturalWidth>1;img.hidden=!valid;const f=img.parentElement.querySelector('[data-gl-main-photo-fallback]');if(f)f.hidden=valid;};
 const set=url=>targets.forEach(img=>{
  ['srcset','sizes','data-src','data-srcset','data-lazy'].forEach(a=>img.removeAttribute(a));
  if(img.getAttribute('src')!==url){img.hidden=true;const f=img.parentElement.querySelector('[data-gl-main-photo-fallback]');if(f)f.hidden=false;img.src=url;}
  if(img.complete)show(img);
 });
 const product=()=>{
  const form=document.querySelector('form#product-detail-form');
  const id=form?.querySelector('[name="productId"]')?.value||form?.querySelector('[itemprop="productID"]')?.getAttribute('content');
  return String(id)===expected&&(window.dataLayer||[]).some(e=>String(e.shoptet?.product?.id)===expected);
 };
 const sync=()=>{
  queued=false;
  if(!root.isConnected){observer.disconnect();document.removeEventListener('load',schedule,true);document.removeEventListener('error',schedule,true);return;}
  if(!product()){set(known);return;}
  const gallery=[...document.querySelectorAll('#main-slider-slide01 img,.p-image .p-main-image img,.p-image img')];
  const img=gallery.find(i=>!root.contains(i)&&i.complete&&i.naturalWidth>1);
  const url=img&&(img.currentSrc||img.getAttribute('src'));
  if(!url||failed.has(url)||/missing_images|missing-image|no-image/i.test(url)){set(known);return;}
  set(url);
 };
 function schedule(event){if(event&&root.contains(event.target))return;if(!queued){queued=true;queueMicrotask(sync);}}
 targets.forEach(img=>{img.addEventListener('load',()=>show(img));img.addEventListener('error',()=>{const bad=img.getAttribute('src');if(bad!==known){failed.add(bad);set(known);}else show(img);});if(img.complete)show(img);});
 const observer=new MutationObserver(records=>{if(records.some(m=>!root.contains(m.target)))schedule();});
 observer.observe(document.documentElement,{childList:true,subtree:true,attributes:true,attributeFilter:['src','srcset','sizes','value','content','id','name']});
 document.addEventListener('load',schedule,true);document.addEventListener('error',schedule,true);
 schedule();
})();
