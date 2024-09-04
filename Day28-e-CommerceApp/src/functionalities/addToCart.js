import { getDetailsFormLocalStorage } from "../localStorage/getDetailsFromLocalStorage";
import { updateCartValue } from "./updateCartValue";

// getting local store data 
let localStoreData = getDetailsFormLocalStorage();

export function addToCart(event, id){
    const currentCard = document.getElementById(`card${id}`);



    // if the this product already in cart then

    let existingProd = localStoreData.find(item => item.id === id);
    console.log(existingProd);
    
    if(existingProd){
        alert('Already Exist bro!')
        return false;
    }

    let productName = currentCard.querySelector('h2').innerText;
    let price = currentCard.querySelector('p:nth-of-type(2)').innerText;
    let quantity = currentCard.querySelector('.productQuantity').innerText;

    price = price * quantity

    let addCart =  {productName, price, quantity, id};

    localStoreData.push(addCart);
    
    // set to the local storage
    localStorage.setItem("cardData", JSON.stringify(localStoreData))

    let cartLength = localStoreData.length;

    

    // update the cart button value
    updateCartValue(cartLength)
    
}