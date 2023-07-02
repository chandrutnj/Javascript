const modal=document.createElement('div');
modal.id='modal';
document.body.appendChild(modal);


let image=document.querySelectorAll('.img');

image.forEach(image=>{
    image.addEventListener('click',()=>{
       /*  modal.style.display='grid'; */
        modal.classList.add('active');
        const img=document.createElement('img');
        img.src=image.src;
        img.id='img';
        while(modal.firstChild){
            modal.removeChild(modal.firstChild);
            
        }
        modal.append(img);
   
    });
});

modal.addEventListener('click',()=>{
   /*  modal.style.display='none'; */
   modal.classList.remove('active');
  
});