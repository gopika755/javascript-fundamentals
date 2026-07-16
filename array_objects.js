let cosmetics =[
    {name:"Lipstic",price:9000},
    {name:"Foundation",price:23000},
    {name:"Primer",price:12000},
    {name:"Concealer",price:34000}
];
let product = cosmetics.find(product =>product.price > 10000);
console.log(product);