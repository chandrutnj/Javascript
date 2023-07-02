let  input=document.querySelector('.search-item');

let item=document.querySelectorAll('.box');

input.addEventListener('keyup',()=>{
    item.forEach((el)=>{
        
        let itemName=el.dataset.filter;
       if(itemName.includes(input.value.toLowerCase().trim())){
        el.style.display='block';
       }else{
        el.style.display='none';
       }
    });
});

const btn=document.querySelectorAll('.btn-group button');
   

btn.forEach((button)=>{
    button.addEventListener('click',(el)=>{
        el.preventDefault();
       item.forEach((box)=>{
            let itemName=box.dataset.filter;
            if(el.target.dataset.filter=='all'){
                box.style.display='block';
            }else{
                if(el.target.dataset.filter==itemName){
                    box.style.display='block';
                }else{
                    box.style.display='none';
                }
            }
        }) 
        setActiveBtn(el);
        
    });
});

function setActiveBtn(el){
    btn.forEach((btn)=>{
        btn.classList.remove('btn-active');
    })
    el.target.classList.add('btn-active');
    
}
