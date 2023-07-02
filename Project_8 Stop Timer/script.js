

const btnStart=document.querySelector('.start');
const btnStop=document.querySelector('.stop');
const btnReset=document.querySelector('.reset');


let h=m=s=ms=0,startTimer;

btnStart.addEventListener('click',()=>{
    btnStart.disabled=true;
    startTimer=setInterval(() => {
        ms++;
        if(ms==100){
            s++;
            ms=0;
        }
        if(s==60){
            m++;
            s=0;
        }
        if(m==60){
            h++;
            m=0;
        }
        Updatetime();
    }, 10);
    
});


btnStop.addEventListener('click',()=>{
    btnStart.disabled=false;
    clearInterval(startTimer);
    

});

btnReset.addEventListener('click',()=>{

    h=m=s=ms=0;
    btnStart.disabled=false;
    clearInterval(startTimer);
    
    Updatetime();

});

function Updatetime(){   

    ph=h<10?'0'+h:h;
    pm=m<10?'0'+m:m;
    ps=s<10?'0'+s:s;
    pms=ms<10?'0'+ms:ms;

    document.querySelector('.hrs').innerText=ph;
    document.querySelector('.min').innerText=pm;
    document.querySelector('.sec').innerText=ps;
    document.querySelector('.msec').innerText=pms;


};
Updatetime()


