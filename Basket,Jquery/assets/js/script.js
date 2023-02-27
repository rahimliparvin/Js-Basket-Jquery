"use strict";

let cardBtns = document.querySelectorAll("#shop a");

let products = [];

if (localStorage.getItem("basket") != null) {
    products = JSON.parse(localStorage.getItem("basket"));
}
cardBtns.forEach(btn => {
    btn.addEventListener("click", function (e) {
        e.preventDefault();

        let productImage = this.parentNode.previousElementSibling.getAttribute("src");
        let productName = this.parentNode.firstElementChild.innerText;
        let productDesc = document.querySelector(".card-text").innerText;
        let productPrice = parseInt(this.parentNode.children[1].innerText);
        let productId = parseInt(this.parentNode.parentNode.getAttribute("data-id"));

        console.log(productPrice);
        let existProduct = products.find(m => m.id == productId);

        if (existProduct != undefined) {
            existProduct.count += 1;
            existProduct.price= productPrice * existProduct.count;
        } else {
            products.push({
                id: productId,
                name: productName,
                img: productImage,
                description: productDesc,
                price: productPrice,
                count: 1,
               
            })
        }

        localStorage.setItem("basket", JSON.stringify(products));

        getBasketCount(products);

    })
})

function getBasketCount(arr) {
    let sum = 0;
    for (const item of arr) {
        sum+= item.count;
    }
    document.querySelector("sup").innerText = sum;
};

getBasketCount(products);

// document.querySelector("#test span").addEventListener("click",function(){
//     let num = parseInt( document.querySelector("input").value );
//     num +=1
//     document.querySelector("input").value = num;
// })
