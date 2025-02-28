function sum(num1, num2, fnToCall) {
let result = num1 + num2;
fnToCall(result);
}

function displayResult(data) {
console.log("Result of the sum is : " + data);
return data;
}

function displayResultPassive(data) {
console.log("Sum's result is : " + data);
}



// U r allowed to call one function after this 
// How will u displayresult of the sum
const ans=sum(1,2,displayResultPassive)
