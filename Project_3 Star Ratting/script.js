let stars=document.querySelectorAll('.star');
let ratting=document.querySelector('.container h3');


stars.forEach((star,index)=>{
    star.addEventListener('click',()=>{
        let current_ratting=index+1;
        ratting.innerText=`${current_ratting} of 5`;
        
        stars.forEach((star,ind)=>{
            
            if(current_ratting>=ind+1){
                star.name="star";
            }else{
                star.name='star-outline'
            }
        });
    });

})
    
