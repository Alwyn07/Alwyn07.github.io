const menu=document.querySelector('.menu'),nav=document.querySelector('nav');
menu?.addEventListener('click',()=>{nav.style.display=nav.style.display==='flex'?'none':'flex';nav.style.position='absolute';nav.style.top='72px';nav.style.right='5vw';nav.style.flexDirection='column';nav.style.background='#0b0d10';nav.style.padding='18px';nav.style.border='1px solid #25282d'});
document.querySelectorAll('nav a').forEach(a=>a.addEventListener('click',()=>{if(innerWidth<=850)nav.style.display='none'}));
