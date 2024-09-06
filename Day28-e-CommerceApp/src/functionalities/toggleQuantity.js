// Toggle Increment Decrement quantity and update the UI function;

export  function  toggleQuantity(event, id){
    // select the card
    const currentCardProduct = document.getElementById(`card${id}`);

    const productQuantity = currentCardProduct.querySelector('.productQuantity');
    
    let quantity = Number(productQuantity.innerText);

    // console.log(event.target)
    if(event.target.classList.contains('increment')){
        if(quantity < 10){
            quantity +=1
        }else{
            quantity = 10
        }
    }

    if(event.target.classList.contains('decrement')){
        if(quantity > 0){
            quantity -= 1
        }
    }

    productQuantity.innerText  = quantity;
    // productQuantity.setAttribute("data-quantity", quantity.toString());

    return quantity;
}