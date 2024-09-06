export function removeLocalData(localCartData, id){
    const updatedData =  localCartData.filter(item => item.id !== id);

    localStorage.setItem("cardData", JSON.stringify(updatedData))
    // not return anything
    return updatedData;
}