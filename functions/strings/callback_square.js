// function square(n){
//     return n*n
// }
// function cube(n){
//     return n*n*n
// }


// function sumofsquares(a,b){
//     const  val1=square(a)
//     const  val2=square(b)
    

//     return val1+val2
// }


// function sumofcubes(a,b){
//     val1=cube(a)
//     val2=cube(b)
//     return val1+val2
// }




// console.log(sumofsquares(2,2))
// console.log(sumofcubes(2,2))







// Now call backs 
function square(n){
    return n*n
}


function cube(n){
    return n*n*n
}


function sumofsomething(a,b,fn){
    const val1=fn(a)
    const val2=fn(b)

    return val1+val2
}

sum=sumofsomething(3,3,cube)
console.log(sum)