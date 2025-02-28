// const users='{"name":"Vaishnavi","age":20,"gender":"male"}'

// // JSON Parse
// const user=JSON.parse(users)
// console.log(user["gender"])


// JSON stringify

const users={
    name:"vaishnavi",
    age:23,
    gender:"female"
}
console.log(users["name"])

const finalstring=JSON.stringify(users)
console.log(finalstring["name"])