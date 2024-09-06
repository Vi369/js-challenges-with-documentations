import { toggleQuantity } from "./src/functionalities/toggleQuantity";
import { updateCartValue } from "./src/functionalities/updateCartValue";
import { getDetailsFormLocalStorage } from "./src/localStorage/getDetailsFromLocalStorage";
import { removeLocalData } from "./src/localStorage/RemoveLocalData";

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
        productClone.querySelector('p:nth-of-type(1)').innerHTML = `<i class="fa-solid fa-indian-rupee-sign">${price}</i> `;

        productClone.querySelector('.productQuantity').innerText = quantity;

        // increment and decrement toggle
        productClone.querySelector('.quantityToggle').addEventListener('click', function(event){
            toggleQuantity(event, id);
            // update the local store data
            // TODO: 
            updateLocalData(localCartData, id);
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
    })
}