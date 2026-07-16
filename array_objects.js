let products = [
    {name:"mouse",price:500},
    {name:"keyboard",price:7000},
    {name:"monitor",price:9000}
];
let total = products.reduce((sum,product)=>{
    return sum+product.price
},0);
console.log(total);