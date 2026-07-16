let cosmetics =[
    {name:"Lipstic",price:10000},
    {name:"Foundation",price:23000},
    {name:"Primer",price:12000},
    {name:"Concealer",price:34000}
];
let expensive = cosmetics.filter(cosmetics => cosmetics.price > 11000);
console.log(expensive);