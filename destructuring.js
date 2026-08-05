const student ={
    name:"Adeline",
    age:24,
    place:"New york"
};
const {name,...details}=student;
console.log(name);
console.log(details);