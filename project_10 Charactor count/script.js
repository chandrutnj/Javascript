const textAreaEl=document.querySelector('#textarea');
const totalChar=document.querySelector('.textcount');
const remainChar=document.querySelector('.remaining');

const container=document.querySelector('.container');
const nav=document.querySelector('.nav')

window.addEventListener('scroll',()=>{
    console.log(nav.offsetHeight);
    console.log(container.offsetTop);
    console.log(container.offsetTop-nav.offsetHeight);
    console.log(window.scrollY);
    if(window.scrollY>container.offsetTop-nav.offsetHeight){
        nav.classList.add('active')
    }else{
        nav.classList.remove('active')
    }
})

textAreaEl.addEventListener('keyup',()=>{
    updatecount();
});
updatecount();

function updatecount(){
    totalChar.innerText=textAreaEl.value.length;
    remainChar.innerText=textAreaEl.getAttribute('maxLength')-textAreaEl.value.length;
};