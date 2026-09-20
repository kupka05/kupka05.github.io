// 기획서 뷰어: 기본 펼침, iframe은 lazy 로딩
document.querySelectorAll('.btn[data-src]').forEach(function(b){
  var v=b.closest('.doc').querySelector('.viewer');
  function load(){if(!v.firstChild){var f=document.createElement('iframe');f.src=b.dataset.src;f.allowFullscreen=true;f.loading='lazy';v.appendChild(f);}}
  v.classList.add('open');load();b.textContent='접기';
  b.addEventListener('click',function(){
    var open=v.classList.toggle('open');
    if(open)load();
    b.textContent=open?'접기':'펼쳐 보기';
  });
});
// 유튜브: 썸네일을 누를 때만 플레이어를 불러온다
document.querySelectorAll('.yt').forEach(function(b){
  b.style.backgroundImage='url(https://i.ytimg.com/vi/'+b.dataset.id+'/hqdefault.jpg)';
  b.addEventListener('click',function(){
    var f=document.createElement('iframe');
    f.src='https://www.youtube-nocookie.com/embed/'+b.dataset.id+'?autoplay=1'+(b.dataset.start?'&start='+b.dataset.start:'');
    f.allow='autoplay; encrypted-media; picture-in-picture';f.allowFullscreen=true;
    b.replaceWith(f);
  });
});
// 반복 영상: 화면에 들어올 때만 불러와 재생하고, 벗어나면 멈춘다
(function(){
  var vids=document.querySelectorAll('video[data-autoplay]');
  if(!('IntersectionObserver' in window)){vids.forEach(function(v){v.play();});return;}
  var io=new IntersectionObserver(function(es){
    es.forEach(function(e){if(e.isIntersecting){e.target.play().catch(function(){});}else{e.target.pause();}});
  },{rootMargin:'200px 0px'});
  vids.forEach(function(v){io.observe(v);});
})();
