export function updateLocalData(localCartData,updatedQuantity, id){
    const itemIndex = localCartData.findIndex(item => item.id === id);

    // If the item exists, update its quantity and price
    if (itemIndex !== -1) {
        const item = localCartData[itemIndex];
        item.quantity = updatedQuantity;

        // dom update 
        document.querySelector('p:nth-of-type(1)').innerHTML = `<i class="fa-solid fa-indian-rupee-sign">${item.price * updatedQuantity}</i> `;
        localStorage.setItem("cardData", JSON.stringify(localCartData))

    }
}