/* Mirror the verified host's loaded main gallery into hero + CTA.
   No fetched product, no guessed SKU, no price/cart changes. */
(()=>{
 'use strict';
 const root=document.querySelector('#special-popis[data-gl-photo-variant="woman-dark-cherry-sacek"]');
 if(!root||root.dataset.glMainPhotoBound)return;
 root.dataset.glMainPhotoBound='true';
 const targets=[...root.querySelectorAll('[data-gl-main-photo]')],failed=new Set();
 let queued=false;
 const reset=()=>targets.forEach(img=>{img.hidden=true;img.removeAttribute('src');img.parentElement.querySelector('[data-gl-main-photo-fallback]').hidden=false;});
 const show=img=>{const valid=img.complete&&img.naturalWidth>1;img.hidden=!valid;img.parentElement.querySelector('[data-gl-main-photo-fallback]').hidden=valid;};
 const product=()=>{
  const entries=window.dataLayer||[],form=document.querySelector('form#product-detail-form');
  const id=form?.querySelector('[name="productId"]')?.value;
  return entries.map(e=>e.shoptet?.product).find(p=>p&&String(p.id)===String(id)&&/woman balance/i.test(p.name||'')&&/dark[\s-]*cherry/i.test(p.name||'')&&/sáček|sacek/i.test(p.name||'')&&!p.hasVariants);
 };
 const sync=()=>{
  queued=false;
  if(!root.isConnected){observer.disconnect();document.removeEventListener('load',schedule,true);document.removeEventListener('error',schedule,true);return;}
  if(!product()){reset();return;}
  const img=document.querySelector('#main-slider-slide01 img')||document.querySelector('.p-image .p-main-image img')||document.querySelector('.p-image img');
  const url=img&&(img.currentSrc||img.getAttribute('src'));
  if(!img||root.contains(img)||!img.complete||img.naturalWidth<=1||!url||failed.has(url)||/missing_images|missing-image|no-image/i.test(url)){reset();return;}
  targets.forEach(target=>{
   ['srcset','sizes','data-src','data-srcset','data-lazy'].forEach(a=>target.removeAttribute(a));
   if(target.getAttribute('src')!==url){target.hidden=true;target.parentElement.querySelector('[data-gl-main-photo-fallback]').hidden=false;target.src=url;}
   if(target.complete)show(target);
  });
 };
 function schedule(event){if(event&&root.contains(event.target))return;if(!queued){queued=true;queueMicrotask(sync);}}
 targets.forEach(img=>{img.addEventListener('load',()=>show(img));img.addEventListener('error',()=>{failed.add(img.getAttribute('src'));reset();});});
 const observer=new MutationObserver(records=>{if(records.some(m=>!root.contains(m.target)))schedule();});
 observer.observe(document.documentElement,{childList:true,subtree:true,attributes:true,attributeFilter:['src','srcset','sizes','value','content','id','name']});
 document.addEventListener('load',schedule,true);document.addEventListener('error',schedule,true);
 reset();schedule();
})();
