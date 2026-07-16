let users =[
    {name:"Fidha",place:'taliparamba',isactive:true},
    {name:"Shaheer",place:"valapattanam",isactive:true},
    {name:"Razi",place:"sreekandapuram",isactive:true},
    {name:"Shihas",place:"magad",isactie:true}
];
let count = users.reduce((total,user) =>{
    return user.isactive ? total + 1: total;

},0);
console.log(count);
