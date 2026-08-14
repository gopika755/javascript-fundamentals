let balance = 10000;
let widthdrawal = 3000;

if(widthdrawal <= balance){
    balance = balance - widthdrawal;

    console.log("Widthrawal  successful");
    console.log("Remaining balance: ",balance);

}else{
    console.log("Insufficient balance");
};