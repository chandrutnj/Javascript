const btncart= document.querySelector('#cart-icon');
const cart = document.querySelector('.cart-list');
const btnclose=document.querySelector('.close-btn');

// cart show
btncart.addEventListener('click',()=>{
    cart.classList.add('cart-active');
});

// cart close
btnclose.addEventListener('click',()=>{
    cart.classList.remove('cart-active');
});

//DOM load
document.addEventListener('DOMContentLoaded',loadFood);

function loadFood(){
    loadContent(); 
};

// funcation into the DOM load
function loadContent(){
    //Remove Item
    let btnRemove=document.querySelectorAll('.trash');
    btnRemove.forEach((btn)=>{
        btn.addEventListener('click',cartRemove);
    });

    //Value change

    let qtyElement=document.querySelectorAll('.cart-qty');
    qtyElement.forEach((input)=>{
        input.addEventListener('change', changeQty );
    });
    
    
    let addCart=document.querySelectorAll('.add-cart');
    addCart.forEach((btn)=>{
        btn.addEventListener('click',addItem);
    })
    
    updateTotal();
}


let itemList=[];


//Add to cart
function addItem(){
    let food=this.parentElement.parentElement;
    let title = food.querySelector('.food-title').innerHTML;
    let price = food.querySelector('.food-price').innerHTML;
    let imgSrc=food.querySelector('.food-image').src;

    // check product already exist in cart

    let newproduct = {title,price,imgSrc};

    if (itemList.find((el)=>el.title==newproduct.title)){
        alert(' Product already exist in cart');
        return;
    }else{
        itemList.push(newproduct);
       
    }

    // creat new product to add to cart
    let newProductElement=createCartItem(title,price,imgSrc);
    let element = document.createElement('div'); // without this only shows the source code into the page.
    element.innerHTML=newProductElement
    let cartBasket=document.querySelector('.cart-content');
    cartBasket.append(element);

    loadContent(); // call back 
   


}

// creat new cart item
function createCartItem(title,price,imgSrc){
    return `
    <div class="cart-box">
                        <img src="${imgSrc}" alt="Dosa" class="cart-img">
                        <div class="detail-box">
                            <div class="food-title">${title}</div>
                            <div class="price-box">
                                <div class="cart-price">${price}</div>
                                <div class="cart-amt">${price}</div>
                            </div>
                            <input type="number" value="1" class="cart-qty" >
                        </div>
                        <ion-icon name="trash-outline" class="trash"></ion-icon>
                    </div>
    `;
}



// Remove Item
function cartRemove(){
    
    if(confirm('Are you sure to Remove?')){
        let title=this.parentElement.querySelector('.food-title').innerHTML;
        //remove same product in array
        itemList=itemList.filter(el=>el.title!=title);
        // remove product fro cart item
        this.parentElement.remove();

        loadContent(); // call back
         
    }
} 

// Change Quantity

function changeQty(){
    if(isNaN(this.value)|| this.value<1 || this.value==""){
        this.value=1;
    }
    loadContent(); // call back
}

// Total update
function updateTotal(){

    let cartItem = document.querySelectorAll('.cart-box');
    let totalValue = document.querySelector('.total-price');
    
    let total=0;

    cartItem.forEach(product=>{
        let pricElement=product.querySelector('.cart-price');
        //let price=parseFloat(pricElement.innerHTML.replace('Rs:',"")); short for below
        let price=pricElement.innerHTML;
        price=price.replace('Rs:',"");
        price=parseFloat(price);
        let qty = product.querySelector('.cart-qty').value;
        total+=price*qty;
        product.querySelector('.cart-amt').innerHTML='Rs:'+(price*qty);
    });

    totalValue.innerHTML='Rs:'+total;
   
    // Add procuct count in cart

const cartCount=document.querySelector('.cart-count');
let count=itemList.length;
cartCount.innerHTML=count;

if(count==0){
    cartCount.style.display='none';
}else{
    cartCount.style.display='block';
    
}


}
/* const btncart=document.querySelector('#cart-icon');
const cart=document.querySelector('.cart-list');    

btncart.addEventListener('click',()=>{
    cart.classList.toggle('cart-active');
}); */

























































































 