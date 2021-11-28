let cart = [
    {id:1,productName:"Telefon",quantity:1,unitPrice:4000},
    {id:2,productName:"Bardak",quantity:4,unitPrice:10},
    {id:3,productName:"Kalem",quantity:6,unitPrice:15},
    {id:4,productName:"Şarj Cihazı",quantity:8,unitPrice:50},
    {id:5,productName:"Kitap",quantity:5,unitPrice:75},
    {id:6,productName:"Kahve Makinası",quantity:1,unitPrice:240},
]

console.log("<ul>")
cart.map(product=>{
    console.log("<li>"+product.productName+ " : " + product.unitPrice*product.quantity+ "</li>")
})
console.log("</ul>")


let total = cart.reduce((acc,product)=>acc+ product.unitPrice* product.quantity,0)


console.log(total)

let quantityOver2 = cart.filter(product=>product.quantity>2)

console.log(quantityOver2)

function addToCart(sepet){
    sepet.push({id:7,productName:"Monitor",quantity:1,unitPrice:20})
}

addToCart(cart)

console.log(cart)
//değer tiplerde değişken atanır ve kalır, değer tiplerde değişir
let sayi=10
function sayiTopla (number){
    number +=1
}
sayiTopla(sayi)
console.log(sayi)

