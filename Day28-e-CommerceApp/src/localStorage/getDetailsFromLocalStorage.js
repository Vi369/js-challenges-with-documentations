export function getDetailsFormLocalStorage(){
    let localProducts = localStorage.getItem('cardData');

    if(!localProducts){
        return [];
    }else{
        localProducts = JSON.parse(localProducts);
        // return it
        return localProducts;

    }
}