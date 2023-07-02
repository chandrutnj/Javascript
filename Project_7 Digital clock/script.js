const hrs=document.querySelector('.hrs');
const min=document.querySelector('.min');
const sec=document.querySelector('.second');
const zone=document.querySelector('.zone');

function updateTime(){
const t=new Date();
let h= t.getHours();
const m= t.getMinutes();
const s= t.getSeconds();
zone.innerHTML=h>=12?'PM':'AM';
if(h>12){
    h=h-12;
}else if(h==0){
    h=12;
}
hrs.innerHTML=h<10?'0'+h:h;
min.innerHTML=m<10?'0'+m:m;
sec.innerHTML=s<10?'0'+s:s;




};

setInterval(updateTime,1000)