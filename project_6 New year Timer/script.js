function updateTime(){
const currentYear=new Date().getFullYear();// year only current year
const currentDate=new Date() // current year day time 
const newYear=new Date(`january 1 ${currentYear+1} 00:00:00`); // next year calculation
const diff=newYear-currentDate; // dif of curnt and nxt year

let day=Math.floor(diff/1000/60/60/24); // day
let hour=Math.floor((diff/1000/60/60)%24);//remining hours
let minute= Math.floor((diff/1000/60)%60);// remining minutes
let second= Math.floor((diff/1000)%60);// remining sconds

const d = document.querySelector('.box .day');
const h = document.querySelector('.box .hours');
const m = document.querySelector('.box .minute');
const s = document.querySelector('.box .second');

d.innerHTML=day<10?'0'+day:day;
h.innerHTML=hour<10?'0'+hour:hour; // condition for 2 digit '00'
m.innerHTML=minute<10?'0'+minute:minute
s.innerHTML=second<10?'0'+second:second;

};



setInterval(updateTime,1000); // call the function after 1sec for function reload - 1000 ms = 1 sec



