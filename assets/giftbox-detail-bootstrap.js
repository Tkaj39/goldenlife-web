/* Small CMS-safe entry point. The complete, pinned reader loads only on demand. */
(function () {
  'use strict';
  const box=document.querySelector('#special-popis.gl-box-refined');
  if(!box||box.dataset.glBootstrapBound)return;
  box.dataset.glBootstrapBound='true';
  const panel=box.querySelector('[data-gl-reader]'),title=panel.querySelector('[data-gl-reader-title]'),status=panel.querySelector('[data-gl-reader-status]'),host=panel.querySelector('[data-gl-reader-content]'),retry=panel.querySelector('[data-gl-reader-retry]'),buttons=[...box.querySelectorAll('.gl-open-detail')];
  let pending=null,loading=false;
  function ready(){
    if(!box.dataset.glReaderBound||!host.shadowRoot)return false;
    loading=false;
    if(pending){const button=pending;pending=null;button.click();}
    return true;
  }
  function failed(){
    loading=false;
    if(ready()||!pending)return;
    host.removeAttribute('aria-busy');
    status.textContent='Načítání podrobností se nepodařilo spustit. Zkus to prosím znovu; stránku boxu neopouštíš.';
    retry.hidden=false;
  }
  function load(){
    if(ready()||loading)return;
    loading=true;
    const script=document.createElement('script');
    script.src='https://cdn.jsdelivr.net/gh/pavel489/goldenlife-web@a71372aa77f2a8ab3b439d8fef834cace401cccc/assets/giftbox-detail-loader.js';
    script.integrity='sha384-Bps/lJBbNyCFGEd9Flb+LRZ2rDKRO8it3XjcImktY+OjuV5f+vdD/IP9O9Ra5IlK';
    script.crossOrigin='anonymous';
    script.async=true;
    let settled=false;
    const pin='a71372aa77f2a8ab3b439d8fef834cace401cccc';
    const sri='sha384-Bps/lJBbNyCFGEd9Flb+LRZ2rDKRO8it3XjcImktY+OjuV5f+vdD/IP9O9Ra5IlK';
    const timeout=setTimeout(fallback,15000);
    script.onload=()=>{if(settled)return;settled=true;clearTimeout(timeout);if(!ready())failed();};
    script.onerror=fallback;
    async function fallback(){
      if(settled)return;
      settled=true;clearTimeout(timeout);script.remove();
      // CDN outage fallback: the same immutable Git blob, checked before any execution.
      const controller=new AbortController(),timer=setTimeout(()=>controller.abort(),20000);
      try{
        const response=await fetch('https://raw.githubusercontent.com/pavel489/goldenlife-web/'+pin+'/assets/giftbox-detail-loader.js',{credentials:'omit',cache:'no-store',signal:controller.signal});
        if(!response.ok)throw Error('reader-http');
        const bytes=await response.arrayBuffer(),hash=await crypto.subtle.digest('SHA-384',bytes);
        const actual='sha384-'+btoa(String.fromCharCode(...new Uint8Array(hash)));
        if(actual!==sri)throw Error('reader-integrity');
        const local=document.createElement('script');local.textContent=new TextDecoder().decode(bytes);document.head.append(local);local.remove();
        if(!ready())failed();
      }catch(_){failed();}finally{clearTimeout(timer);}
    }
    document.head.append(script);
  }
  function close(){
    const previous=pending;pending=null;panel.hidden=true;host.removeAttribute('aria-busy');
    buttons.forEach(b=>b.setAttribute('aria-expanded','false'));
    if(previous){previous.scrollIntoView({block:'center',behavior:'auto'});previous.focus({preventScroll:true});}
  }
  function waiting(button){
    pending=button;panel.hidden=false;title.textContent='Podrobně: '+button.dataset.glSourceName;
    buttons.forEach(b=>b.setAttribute('aria-expanded',String(b===button)));
    status.textContent='Načítám podrobnosti produktu…';retry.hidden=true;host.setAttribute('aria-busy','true');
    title.focus({preventScroll:true});panel.scrollIntoView({block:'start',behavior:'auto'});load();
  }
  buttons.forEach(button=>button.addEventListener('click',e=>{
    if(box.dataset.glReaderBound){pending=null;return;}
    e.preventDefault();
    if(pending===button&&!panel.hidden){close();return;}
    waiting(button);
  }));
  panel.querySelectorAll('[data-gl-reader-close]').forEach(button=>button.addEventListener('click',()=>{if(!box.dataset.glReaderBound)close();}));
  panel.addEventListener('keydown',e=>{if(e.key==='Escape'&&!box.dataset.glReaderBound){e.preventDefault();close();}});
  retry.addEventListener('click',e=>{
    if(pending&&box.dataset.glReaderBound){e.stopImmediatePropagation();ready();return;}
    if(!box.dataset.glReaderBound&&pending){e.stopImmediatePropagation();waiting(pending);}
  });
})();
