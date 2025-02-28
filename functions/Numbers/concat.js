initialarray=[1,2,3,4]
secondarray=[3,6,7,8,9]
console.log(initialarray.concat(secondarray))



// suppose u want to do other way also
initialarray=[1,2,3,4]
secondarray=[3,6,7,8,9]
for (let i=1;i<secondarray.length;i++){
    finalarray=initialarray.push(secondarray[i])
}
console.log(finalarray)