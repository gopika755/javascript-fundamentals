let users =[
    {name:"GOPIKA",age:18,isactive:true},
    {name:"NAJLA",age:18,isactive:false},
    {name:"ANUSHA",age:19,isactive:true},
    {name:"SAFA",age:19,isactive:false},
    {name:"NAJIYA",age:18,isactive:false},
    {name:"FIDHA",age:18,isactive:true},
];
let user =users.find(users => users.name === "NAJLA");
console.log(user);