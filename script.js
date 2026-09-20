const cursor=document.querySelector('.cursor');
document.addEventListener('mousemove',e=>{if(cursor){cursor.style.left=e.clientX+'px';cursor.style.top=e.clientY+'px'}});
document.querySelectorAll('a').forEach(a=>a.addEventListener('mouseenter',()=>document.body.classList.add('hovering')));
document.querySelectorAll('a').forEach(a=>a.addEventListener('mouseleave',()=>document.body.classList.remove('hovering')));
