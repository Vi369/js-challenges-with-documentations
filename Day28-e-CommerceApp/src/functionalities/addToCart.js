import { getDetailsFormLocalStorage } from "../localStorage/getDetailsFromLocalStorage";
import { updateCartValue } from "./updateCartValue";


export function addToCart(event, id){
    const currentCard = document.getElementById(`card${id}`);

    // getting local store data 
    let localStoreData = getDetailsFormLocalStorage();

    let productName = currentCard.querySelector('h2').innerText;
    let price = currentCard.querySelector('p:nth-of-type(2)').innerText;
    let quantity = Number(currentCard.querySelector('.productQuantity').innerText);

    console.log("quantity:",quantity)
    if(quantity === 0){
        alert('Please Select the Quantity!')
        return false;
    }

    // if the this product already in cart then
    let existingProd = localStoreData.find(item => item.id === id);
    console.log("hello",existingProd);

    if(existingProd){
        alert('This Product Already Exist bro! check the Cart.')
        return false;
    }

    // price = price * quantity
    let addCart =  {productName, price, quantity, id};
    localStoreData.push(addCart);
    // set to the local storage
    localStorage.setItem("cardData", JSON.stringify(localStoreData))
    let cartLength = localStoreData.length;
    // update the cart button value
    updateCartValue(cartLength)
}