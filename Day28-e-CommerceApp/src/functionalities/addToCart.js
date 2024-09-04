import { getDetailsFormLocalStorage } from "../localStorage/getDetailsFromLocalStorage";

export function addToCart(event, id){
    const currentCard = document.getElementById(`card${id}`);

    // getting local store data 
    let localStoreData = getDetailsFormLocalStorage();

    let productName = currentCard.querySelector('h2');
    let price = currentCard.querySelector('p:nth-of-type(2)').innerText;
    let quantity = currentCard.querySelector('.productQuantity').innerText;

    price = price * quantity

    let addCart =  {productName, price, quantity};

    localStoreData.push(addCart);
    
    // set to the local storage
    localStorage.setItem("cardData", JSON.stringify(localStoreData))
}