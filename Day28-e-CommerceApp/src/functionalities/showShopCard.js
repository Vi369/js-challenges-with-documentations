const productContainer = document.getElementById('productContainer');
const productTemplate = document.getElementById('productTemplate');



export function showShopCard(products){

    products.forEach((product)=>{
        const {name, price, description, image_url} = product;

        // clone the template 
        const productClone = document.importNode(productTemplate.content, true);

        const img = productClone.querySelector('img')
        img.src = image_url;
        img.alt = name;
        productClone.querySelector('h2').innerText = name;
        productClone.querySelector('p:nth-of-type(1)').innerText = description;
        productClone.querySelector('p:nth-of-type(2)').innerText = `$ ${price}`;

        productContainer.appendChild(productClone)
    })

}