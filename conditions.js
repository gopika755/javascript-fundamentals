let num = [20,10,-200,9000];
let small = num[0];
for(let i=1;i<num.length;i++){
    if(num[i]<small){
        small = num[i];
    }
}
console.log(small);