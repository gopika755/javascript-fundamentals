let number = 1231;
let orginal= number;
let reverse=0;
while(number>0){
    let digit = number % 10;

    reverse = reverse * 10 +digit;
    number = Math.floor(number/10);
};
    if (orginal === reverse){
        console.log("Plindrome");
    }else{
        console.log("Not palindrome");
    }