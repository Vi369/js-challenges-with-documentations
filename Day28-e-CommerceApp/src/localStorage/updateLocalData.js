export function updateLocalData(localCartData,updatedQuantity, id){
    const itemIndex = localCartData.findIndex(item => item.id === id);

    const exactCart = document.querySelector(`#card${id}`)

    // If the item exists, update its quantity and price
    if (itemIndex !== -1) {
        const item = localCartData[itemIndex];
        item.quantity = updatedQuantity;

        // dom update 
        exactCart.querySelector('p:nth-of-type(1)').innerHTML = `<i class="fa-solid fa-indian-rupee-sign">${item.price * updatedQuantity}</i> `;
        localStorage.setItem("cardData", JSON.stringify(localCartData))
    }
    return localCartData;
}