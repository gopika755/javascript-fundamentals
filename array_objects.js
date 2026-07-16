let cosmetics =[
    {name:"Lipstic",price:10000},
    {name:"Foundation",price:23000},
    {name:"Primer",price:12000},
    {name:"Concealer",price:34000}
];
let discount = cosmetics.map(cosmetics =>{
    return{
        name:cosmetics.name,
        price:cosmetics.price * 0.9
    };
});
console.log(discount);