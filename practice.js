let price = 5000;
let discount;

if(price >= 5000){
    discount = 20;
}else if(price >=3000){
    discount = 10;
}else{
    discount =0;
}

let discountamount = price * discount / 100;
let finalprice = price = discountamount;
console.log("Discount: ",discount + "%");
console.log("Final price:",finalprice);