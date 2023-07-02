
let slideImg=document.querySelectorAll('.img a');

let imgId=1;
const imgDiv=document.querySelectorAll('.img');


slideImg.forEach((img)=>{
    img.addEventListener('click',(e)=>{
        e.preventDefault();
        imgId=img.dataset.id;
    

         imgDiv.forEach((el)=>{
            el.classList.remove('active'); 
        }); 
        img.parentElement.classList.add('active');
         moveImage()
        
    });
    
});

function moveImage(){
    
    let mainImg=document.querySelector('.main-img')
    const firstImg=document.querySelector('.main-img img:first-child');
    
    let width=(imgId-1)*firstImg.clientWidth;

    mainImg.style.transform=`translatex(-${width}px)`;
    
    
}