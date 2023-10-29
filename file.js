
const menuBtn = document.querySelector('#menu-btn');
const overLay = document.querySelector('#overlay');

const mainThumbnail = document.querySelector(".main-thumbnail");
                                                                //   .main-thumbnail
const mainLightBox = document.querySelector(".lightbox-container .main-thumbnail");

const nextBtn = document.getElementById("next");
const previousBtn = document.getElementById("previous");

const minusBtn = document.querySelector("#minus");
const plusBtn = document.querySelector("#plus");

const images = document.querySelectorAll(".preview img");

    // counter of items
const amount = document.querySelector("#amount");

    //  image slider to left and right
const slider = document.querySelector(".mobile-thumb");

const thumbMob = document.querySelector(".thumb-mob");

    //  cart button which display items
const cartBtn = document.querySelector('.cart-btn');

    //   cart wrapper to wrap selected items
const cart = document.querySelector(".cart-wrap");

   // lightbox overlay to display image slide   
const closeLightBoxBtn = document.querySelector('.close-lightbox')
const lightbox = document.querySelector('.lightbox');

const AddBtn = document.querySelector(".add_btn");

const wrap = document.querySelector('.cart-content');
   // indicator
const indicator = document.querySelector('#indicator');

let amountValue = 0;
let currentImg = 1;

indicator.style.display = "none";

function handlePlus() {
    amountValue++;
    amount.innerText = amountValue;
}
function handleMinus() {
    if (amountValue > 0) {
        amountValue--;
    }
    amount.innerText = amountValue;
}

function nextImage() {
    if (currentImg == 4) {
        currentImg = 1;
    } else {
        currentImg++;
    }
    thumbMob.src=`./images/image-product-${currentImg}.jpg`;
}

function prevImage() {
    if (currentImg == 1) {
        currentImg = 4; 
    } else {
        currentImg--;
    }
    thumbMob.src=`./images/image-product-${currentImg}.jpg`;
    
}

function toggleCart() {
    cart.classList.toggle("invisible");
}
function closeLightBox() {
    lightbox.classList.add("invisible");
}
function openLightBox() {
    lightbox.classList.remove("invisible");
}

//  add itemscartBtn.addEventListener('click', toggleCart);
function addItem() {
    if (amountValue > 0) {
        const total = 125.00 * amountValue;
        wrap.classList.remove("empty");
        wrap.innerHTML = `<div class="product">
                            <div>
                            <img src="./images/image-product-1-thumbnail.jpg" class="product-img">
                            <div class="product-info">
                            <p class="product-title">FALL Limited Edition Sneakers</p>
                            <p><span>$125.00</span> x <span class="number">${amountValue}</span> <b class="total">$${total}</b></p>
                            </div>  
                             <button class="delete-btn" onclick="deleteItem()"><img src="./images/icon-delete.svg"></button>
                            </div>
                            <button class="checkout-btn">Checkout</button>
                            </div>`;
        indicator.style.display = "block";
        indicator.innerText = amountValue;
    }

}

function deleteItem() {
    wrap.classList.add("empty");
    wrap.innerHTML = `<p>Your cart is empty</p>`;
    indicator.style.display = "none";
}

images.forEach((image) => {
    image.addEventListener("click", () => {
        const lastImg = document.querySelectorAll(".selected");
         if (lastImg) {
            lastImg[0].classList.remove("selected");
         }
         image.classList.add("selected");
         const selectedImg = document.querySelector(".selected");
         switch (selectedImg.getAttribute("src")) {
            case "./images/image-product-1-thumbnail.jpg":
                mainThumbnail.src = "./images/image-product-1.jpg";
                mainLightBox.src = "./images/image-product-1.jpg";
                break;
            case "./images/image-product-2-thumbnail.jpg":
                mainThumbnail.src = "./images/image-product-2.jpg";
                mainLightBox.src = "./images/image-product-2.jpg";
                break;
            case "./images/image-product-3-thumbnail.jpg":
                mainThumbnail.src = "./images/image-product-3.jpg";
                mainLightBox.src = "./images/image-product-3.jpg";
                break;
            case "./images/image-product-4-thumbnail.jpg":
                mainThumbnail.src = "./images/image-product-4.jpg";
                mainLightBox.src = "./images/image-product-4.jpg";
                break;      
             
         }
    })
}) 


function toggleNav () {
    // toggle: menu-bar open / close
    menuBtn.classList.toggle('change');
    //toggle: menu-active
    overLay.classList.toggle('overlay-active');
       if (overLay.classList.contains('overlay-active')) {
        overLay.classList.remove('overlay-slide-left')
        overLay.classList.add('overlay-slide-right');
       
       } else {
        overLay.classList.remove('overlay-slide-right')
        overLay.classList.add('overlay-slide-left');
       };
};

// addEventLister
 menuBtn.addEventListener('click', toggleNav);

 plusBtn.addEventListener('click', handlePlus);
 minusBtn.addEventListener('click', handleMinus);

 nextBtn.addEventListener('click', nextImage);
 previousBtn.addEventListener('click', prevImage);

 cartBtn.addEventListener('click', toggleCart);

 closeLightBoxBtn.addEventListener('click', closeLightBox);
 mainThumbnail.addEventListener('click',openLightBox);

 AddBtn.addEventListener("click", addItem);



