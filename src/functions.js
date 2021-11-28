function addToCart(quantity,productName="Elma") //"elma" yazarsak varsayılan olarak elma gönderir
{
    console.log("Sepete eklendi : " + quantity +  " adet : " + productName)
}
//addToCart()  // parametre göndermezsek default değeri ekler. 
//addToCart(10) // parametre içinde sadece adet yazdığımızda varsayılan elmadan yazılan adedi ekler
//addToCart(1,"Karpuz")

let sayHello = ()=>
{
    console.log("Hello World")
}
    sayHello()
let sayHello2 = function() 
{
    console.log("Hello World 2")
}

sayHello2()

function addToCart2 (product)
{

}
addToCart2("Elma",5,10)
addToCart2("Armut",5,10)
addToCart2("Muz",5,10)

let product1={productName:"Elma",unitPrice:10, quantity:5}

function addToCart3(product)
{
    console.log("Ürün : " + product.productName)
    console.log("Adet : " + product.unitPrice)
    console.log("Fiyat : " + product.quantity)
}
    
addToCart3(product1)

function addToCart4 (x)
{
    console.log(products)
}

let products =
[
    {productName:"Elma",unitPrice:10, quantity:5},
    {productName:"Armut",unitPrice:10, quantity:5},
    {productName:"Muz",unitPrice:10, quantity:5}
]
addToCart4(products)

function add(...numbers)  //rest operatorü * rest operatörü sona yazılır
{
    let total=0;
    for (let i =0; i< numbers.lenght;i++)
    
    {
        total= total+numbers[i]
    }    
            console.log(total)
}
add(20,30)
//add(1,2,3,4)
//add(1,2,3,4,5)

let numbers = [30,10,500,600]
console.log(Math.max(...numbers))

let [icAnadolu,Marmara,Ege,[icAnadoluSehirleri,MarmaraSehirleri,EgeSehirleri]] = 
                           [{name:"İç Anadolu", population:"20M"},
                           {name:"Marmara", population:"30M"}, 
                           {name:"Ege", population:"10M"},
                           [  
                           ["Ankara","Konya"],
                           ["İstanbul","Balıkesir"],
                           ["Afyonkarahisar","Aydın"]
                           ]
                        ]
 console.log(icAnadoluSehirleri)
 console.log(MarmaraSehirleri)
 console.log(EgeSehirleri)
                

let newProductName, newUnitPrice, newQuantity
({productName:newProductName, unitPrice:newUnitPrice, quantity:newQuantity}
={productName:"Elma",unitPrice:10,quantity:5})

console.log(newProductName)
console.log(newUnitPrice)
console.log(newQuantity)


