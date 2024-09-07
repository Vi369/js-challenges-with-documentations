export function subtotalPrice(localCartData){
    const subtotalValueContainer = document.getElementById('subtotal');

    const subtotalPrice = localCartData.reduce((acc, item)=>{
        const itmeSubtotal = item.price * item.quantity;

        return acc + itmeSubtotal;
    }, 0); // initial value

    subtotalValueContainer.innerHTML = `Subtotal: <i class="fa-solid fa-indian-rupee-sign tracking-wider"> ${subtotalPrice}</i> `;
}