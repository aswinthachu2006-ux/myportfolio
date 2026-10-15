<script>
// Typing effect
(function(){
  var lines=['print("Hello, I\'m Arun")','import fastapi, pandas, pytest','while learning: build()'];
  var el=document.getElementById('typed'),li=0,ci=0,del=false;
  if(window.matchMedia('(prefers-reduced-motion: reduce)').matches){el.textContent=lines[0];return;}
  function tick(){
    var s=lines[li];
    el.textContent=s.slice(0,ci);
    if(!del&&ci<s.length){ci++;setTimeout(tick,70);}
    else if(!del){del=true;setTimeout(tick,1400);}
    else if(ci>0){ci--;setTimeout(tick,30);}
    else{del=false;li=(li+1)%lines.length;setTimeout(tick,300);}
  }
  tick();
})();

// Project filter
document.querySelectorAll('.filters button').forEach(function(b){
  b.addEventListener('click',function(){
    document.querySelectorAll('.filters button').forEach(function(x){x.setAttribute('aria-pressed','false');});
    b.setAttribute('aria-pressed','true');
    var f=b.dataset.filter;
    document.querySelectorAll('.card').forEach(function(c){
      c.hidden=!(f==='all'||c.dataset.type===f);
    });
  });
});

// Theme toggle
document.getElementById('theme').addEventListener('click',function(){
  var r=document.documentElement;
  var dark=r.dataset.theme?r.dataset.theme==='dark':window.matchMedia('(prefers-color-scheme: dark)').matches;
  r.dataset.theme=dark?'light':'dark';
});

// Active nav link
var links=document.querySelectorAll('nav ul a');
var obs=new IntersectionObserver(function(es){
  es.forEach(function(e){
    if(e.isIntersecting){
      links.forEach(function(a){a.classList.toggle('active',a.getAttribute('href')==='#'+e.target.id);});
    }
  });
},{rootMargin:'-40% 0px -55% 0px'});
document.querySelectorAll('section[id]').forEach(function(s){obs.observe(s);});

// Contact form validation
document.getElementById('form').addEventListener('submit',function(e){
  e.preventDefault();
  var n=document.getElementById('name').value.trim(),
      m=document.getElementById('email').value.trim(),
      t=document.getElementById('text').value.trim(),
      out=document.getElementById('msg');
  if(!n||!t||!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(m)){
    out.textContent='Enter your name, a valid email and a message.';
    return;
  }
  out.textContent='Thanks, '+n+'. Your message is ready to send.';
  this.reset();
});

document.getElementById('year').textContent=new Date().getFullYear();
</script>
