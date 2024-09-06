import { toggleQuantity } from "./src/functionalities/toggleQuantity";
import { updateCartValue } from "./src/functionalities/updateCartValue";
import { getDetailsFormLocalStorage } from "./src/localStorage/getDetailsFromLocalStorage";
import { removeLocalData } from "./src/localStorage/RemoveLocalData";
import { updateLocalData } from "./src/localStorage/updateLocalData";

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
            updateLocalData(localCartData, updatedQuantity, id);
        })

        // Remove cart element 
        productClone.querySelector('.remove').addEventListener('click', function(event){
            const removeCart = document.querySelector(`#card${id}`);
            removeCart.remove();

            // remove local storage data
            const updatedLocalStorageData = removeLocalData(localCartData, id);
            // update the cart 
            updateCartValue(updatedLocalStorageData.length);
        })

        productContainer.appendChild(productClone)

        // subtotal section 
        const subtotalValueContainer = document.getElementById('subtotal');

        const subtotalPrice = localCartData.reduce((acc, item)=>{
            const itmeSubtotal = item.price * item.quantity;

            return acc + itmeSubtotal;
        }, 0); // initial value

        subtotalValueContainer.innerHTML = `Subtotal: <i class="fa-solid fa-indian-rupee-sign tracking-wider"> ${subtotalPrice}</i> `;
    })
}