// const namearray=["vaishnavi","prathyarthi","kiran"]
// const genderarray=["female","male","male"]
// for (let i=0;i<=namearray.length;i++){
//     if(genderarray[i]=="male")
//         console.log(namearray[i])
// }




// You can combine objects in javascrpit using objects i.e agrregate data using objects
// Single object is 
// const users={
//     firstname:"vaishnavi",
//     gender:"female"
// }
// console.log(users["gender"])




// Array of onjects 

let users=[{
    firstname:"vaishnavi",
    gender:"female",
    age:20
    },
{
    firstname:"prathyarthi",
    gender:'male',
    age:21
},{
    firstname:"kiranbusari",
    gender:"male",
    age:21
}]

console.log(users[2])
for (let i=0;i<users.length;i++){
    if(users[i]["gender"]=="male"){
        console.log(users[i]["firstname"])
    }
}