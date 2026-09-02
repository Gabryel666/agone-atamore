const extra=document.createElement('link');extra.rel='stylesheet';extra.href='details.css';document.head.append(extra);
const menu=document.querySelector('.menu');const nav=document.querySelector('nav');
if(menu&&nav){menu.addEventListener('click',()=>{const open=nav.classList.toggle('open');menu.setAttribute('aria-expanded',String(open));menu.textContent=open?'✕':'☰'});}
const page=document.body.dataset.page;if(page){document.querySelector(`nav a[href^="${page}"]`)?.classList.add('active');}
const filters=document.querySelectorAll('[data-filter]');const gallery=document.querySelectorAll('[data-kind]');
filters.forEach(button=>button.addEventListener('click',()=>{filters.forEach(item=>item.classList.remove('selected'));button.classList.add('selected');const filter=button.dataset.filter;gallery.forEach(item=>item.hidden=filter!=='all'&&item.dataset.kind!==filter);}));
