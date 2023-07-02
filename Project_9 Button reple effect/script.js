const btn=document.querySelector('.btn');

btn.addEventListener('mouseover',(event)=>{
  const x=event.pageX-btn.offsetLeft;
  console.log(btn.offsetLeft);
  console.log(event.pageX);
  const y=event.pageY-btn.offsetTop;

  btn.style.setProperty('--xpos',x+'px'); 
  btn.style.setProperty('--ypos',y+'px'); 
});