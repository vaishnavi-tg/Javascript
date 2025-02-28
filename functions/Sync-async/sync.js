function findsum(n){
    let ans=0
    for (let i=0;i<=n;i++){
        ans=ans+i
    }
    return ans
}

function findsumtill100(){
    console.log(findsum(100))
}
console.log("hello world")

findsumtill100()