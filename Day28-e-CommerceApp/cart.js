import { toggleQuantity } from "./src/functionalities/toggleQuantity";
import { updateCartValue } from "./src/functionalities/updateCartValue";
import { getDetailsFormLocalStorage } from "./src/localStorage/getDetailsFromLocalStorage";
import { removeLocalData } from "./src/localStorage/removeLocalData";
import { updateLocalData } from "./src/localStorage/updateLocalData";
import { subtotalPrice } from "./src/functionalities/subtotalPrice";
// localData
const localCartData = getDetailsFormLocalStorage();

const productContainer = document.getElementById('productContainer');
const productTemplate = document.getElementById('productTemplate');

if(localCartData){

    localCartData.forEach(item => {
        const {productName, price,quantity, id} = item;

        // clone the template 
        const productClone = document.importNode(productTemplate.content, true);

        // unique id sets on every element
        productClone.querySelector('#cards').setAttribute('id', `card${id}`)

        
        productClone.querySelector('h2').innerText = productName;
        productClone.querySelector('p:nth-of-type(1)').innerHTML = `<i class="fa-solid fa-indian-rupee-sign tracking-wider"> ${price * quantity}</i> `;

        productClone.querySelector('.productQuantity').innerText = quantity;

        // increment and decrement toggle
        productClone.querySelector('.quantityToggle').addEventListener('click', function(event){
            const updatedQuantity = toggleQuantity(event, id);
            // update the local store data
            const updatedata =  updateLocalData(localCartData, updatedQuantity, id);
            subtotalPrice(updatedata);
        })

        // Remove cart element 
        productClone.querySelector('.remove').addEventListener('click', function(event){
            const removeCart = document.querySelector(`#card${id}`);
            removeCart.remove();

            // remove local storage data
            const updatedLocalStorageData = removeLocalData(localCartData, id);
            // update the cart 
            updateCartValue(updatedLocalStorageData.length);
            // subtotal section update
        subtotalPrice(updatedLocalStorageData);
        })

        productContainer.appendChild(productClone)

        // subtotal section update
        subtotalPrice(localCartData);
    })
}

// form submission handle 
const checkoutForm = document.getElementById('checkoutForm')

checkoutForm.addEventListener('submit', function(event){
    event.preventDefault();

const name = document.getElementById('name').value;
const email = document.getElementById('email').value;
const address = document.getElementById('address').value;
const city = document.getElementById('city').value;
const state = document.getElementById('state').value;
const zip = document.getElementById('zip').value;
const cardNumber = document.getElementById('cardNumber').value;
const expiryDate = document.getElementById('expiryDate').value;
const cvv = document.getElementById('cvv').value;

    if(!(name && email && address && city && state  && zip && cardNumber && expiryDate && cvv)){
        return alert("All Field are required! please fill-up all details.")
    }
    console.log(name , email , address , city , state  , zip , cardNumber , expiryDate , cvv)

    setTimeout(()=>{
        checkoutForm.classList.add("hidden");

        const orderDetails = document.getElementById('orderDetails');
        const orderConfirmation = document.getElementById('orderConfirmation');

        orderConfirmation.classList.remove("hidden");

        orderDetails.innerText = `
            Thank you, ${name}! Your order has been placed successfully.
            A confirmation email has been sent to ${email}.
            Your order will be shipped to:
            ${address}, ${city}, ${state} - ${zip}.
            Payment processed with card ending in ${cardNumber}
        `;
        
        // update the Local Storage data 
        localStorage.removeItem('cardData');
    }, 1500)

    // refresh the page 
    location.reload()
})

