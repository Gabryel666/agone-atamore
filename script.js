const header=document.querySelector('.site-header');const menu=document.querySelector('.menu-button');const nav=document.querySelector('nav');
addEventListener('scroll',()=>header?.classList.toggle('is-scrolled',scrollY>40),{passive:true});
menu?.addEventListener('click',()=>{const open=nav?.classList.toggle('is-open');menu.textContent=open?'✕':'☰';menu.setAttribute('aria-expanded',String(open))});
nav?.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>{nav.classList.remove('is-open');if(menu){menu.textContent='☰';menu.setAttribute('aria-expanded','false')}}));
