arr=[3,4,5,6,7,8]
function filterLogic(n){
    if (n%2==0){
        return true
    }
    else{
        return false
    }
}
const ans=arr.filter(filterLogic)
console.log(ans )