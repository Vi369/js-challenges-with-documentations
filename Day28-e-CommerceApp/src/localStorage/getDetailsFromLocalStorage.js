import { updateCartValue } from "../functionalities/updateCartValue";

export function getDetailsFormLocalStorage(){
    let localProducts = localStorage.getItem('cardData');

    if(!localProducts){
        return [];
    }else{
        localProducts = JSON.parse(localProducts);
        updateCartValue(localProducts.length);
        // return it
        return localProducts;
    }
}