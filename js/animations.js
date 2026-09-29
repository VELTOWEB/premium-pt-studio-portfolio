
(()=>{'use strict';
function initReveal(){const els=[...document.querySelectorAll('.reveal')];if(!('IntersectionObserver'in window)){els.forEach(e=>e.classList.add('is-visible'));return}const io=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('is-visible');io.unobserve(e.target)}}),{threshold:.08,rootMargin:'0px 0px -4%'});els.forEach(e=>io.observe(e))}
function initCounts(){const els=[...document.querySelectorAll('[data-count]')];if(!els.length)return;const run=el=>{const target=Number(el.dataset.count||0),start=performance.now(),dur=1100;const tick=now=>{const p=Math.min((now-start)/dur,1),e=1-Math.pow(1-p,3);el.textContent=Math.round(target*e).toLocaleString('ko-KR');if(p<1)requestAnimationFrame(tick)};requestAnimationFrame(tick)};if(!('IntersectionObserver'in window)){els.forEach(run);return}const io=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){run(e.target);io.unobserve(e.target)}}),{threshold:.5});els.forEach(e=>io.observe(e))}
try{initReveal();initCounts()}catch(err){console.warn('Animation init:',err)}
})();
