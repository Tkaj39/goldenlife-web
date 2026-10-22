/* Sixth card mirrors the second photo in this same product's native gallery. */
(function () {
  'use strict';
  const root=document.querySelector('#special-popis.gl-box-refined');
  const card=root&&root.querySelector('[data-gl-packaging]');
  if(!card||card.dataset.bound)return;
  card.dataset.bound='true';
  const image=card.querySelector('.gl-packaging-photo'),button=card.querySelector('.gl-packaging-open'),note=card.querySelector('.gl-packaging-note');
  let current='',dialog=null,timer=0;
  const failed=new Set();
  function safe(value){
    try{
      const u=new URL(value,location.href);
      if(u.protocol!=='https:'||u.username||u.password)return null;
      if(!['www.golden-life.cz','golden-life.cz','cdn.myshoptet.com'].includes(u.hostname))return null;
      if(u.hostname==='cdn.myshoptet.com'&&!u.pathname.startsWith('/usr/www.golden-life.cz/'))return null;
      if(!/\/user\/shop\/(?:big|orig|detail|related)\/[^/]+\.(?:jpe?g|png|webp|avif|gif)$/i.test(u.pathname))return null;
      if(/missing_images/i.test(u.pathname))return null;
      return {href:u.href,key:u.pathname.replace(/\/shop\/(?:big|orig|detail|related)\//,'/shop/')};
    }catch(_){return null;}
  }
  function hide(message){
    image.hidden=true;button.hidden=true;note.hidden=false;note.textContent=message;
    if(dialog&&dialog.open)dialog.close();
  }
  function selected(){
    const form=document.getElementById('product-detail-form');
    if(!form||root.contains(form))return null;
    const id=form.querySelector('input[name="productId"]');
    if(!id||!id.value)return null;
    const expected=card.dataset.glGalleryProductId||root.dataset.glProductId;
    if(expected&&id.value!==expected)return null;
    // Native thumbnail order is stable even when a visitor changes the selected main image.
    let anchors=[...form.querySelectorAll('.p-thumbnail[href]')].filter(a=>!root.contains(a)&&!a.closest('.is-clone'));
    if(!anchors.length)anchors=[...form.querySelectorAll('.p-image-wrapper a.cbox-gal[data-gallery][href]')].filter(a=>!root.contains(a));
    const seen=new Set(),photos=[];
    for(const a of anchors){
      const u=safe(a.getAttribute('href'));if(!u||seen.has(u.key))continue;
      seen.add(u.key);const im=a.querySelector('img');photos.push({url:u.href,alt:im&&im.alt||a.dataset.alt||''});
    }
    return photos[1]||null;
  }
  function update(){
    const next=selected();
    if(!next){current='';image.removeAttribute('src');hide('Druhá fotografie se převezme z galerie tohoto dárkového boxu.');return;}
    if(current===next.url)return;
    current=next.url;card.dataset.glPackagingSrc=current;
    image.alt='Druhá fotografie dárkového boxu'+(next.alt?' – '+next.alt:'');
    if(failed.has(current)){hide('Druhá fotografie tohoto boxu momentálně není dostupná.');return;}
    hide('Načítám druhou fotografii tohoto boxu…');
    image.removeAttribute('srcset');image.removeAttribute('data-src');image.loading='eager';image.src=current;
  }
  image.addEventListener('load',()=>{
    if(!current||image.src!==current||!image.naturalWidth)return;
    image.hidden=false;button.hidden=false;note.hidden=true;
    if(dialog){const photo=dialog.querySelector('img');photo.src=current;photo.alt=image.alt;}
  });
  image.addEventListener('error',()=>{
    if(!current)return;failed.add(current);hide('Druhá fotografie tohoto boxu momentálně není dostupná.');
  });
  button.addEventListener('click',()=>{
    if(image.hidden||!image.naturalWidth)return;
    if(!dialog){
      dialog=document.createElement('dialog');dialog.className='gl-packaging-dialog';dialog.setAttribute('aria-label','Druhá fotografie dárkového boxu');
      const title=document.createElement('h3');title.textContent='Druhá fotografie dárkového boxu';
      const photo=document.createElement('img');
      const close=document.createElement('button');close.type='button';close.textContent='Zavřít';close.addEventListener('click',()=>dialog.close());
      dialog.append(title,photo,close);root.append(dialog);dialog.addEventListener('close',()=>button.focus({preventScroll:true}));
    }
    const photo=dialog.querySelector('img');photo.src=image.src;photo.alt=image.alt;dialog.showModal();
  });
  const observer=new MutationObserver(records=>{
    if(records.every(record=>root.contains(record.target)))return;
    clearTimeout(timer);timer=setTimeout(update,50);
  });
  function start(){update();observer.observe(document.body,{childList:true,subtree:true,attributes:true,attributeFilter:['href','src','data-src','value','class']});}
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',start,{once:true});else start();
  window.addEventListener('pagehide',()=>{observer.disconnect();clearTimeout(timer)},{once:true});
})();
