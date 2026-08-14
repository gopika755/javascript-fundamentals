let number= 17;
let isPrime = true;

if(number <= 1){
    isPrime = false;
}

for(i=2;i<number;i++){
    if(number % i ==0){
        isPrime = false;
        break;
    }
}

if(isPrime){
    console.log("Prime");
}else{
    console.log("Not Prime");
};