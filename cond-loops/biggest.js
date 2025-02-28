const array=[2,3,5,6,336,85,346,785,4,2,56,73,3]
maxnumber=array[0]
for (let i=1;i<=array.length;i++){
    if (array[i]>maxnumber){
        maxnumber=array[i];
    }
}    
console.log(`The biggest number in the array is ${maxnumber}`)