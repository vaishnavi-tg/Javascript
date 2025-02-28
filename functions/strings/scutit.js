// Its the slice operation witout using slice function
function cutIt(str,startIndex,endIndex){
    let newstr=" "
    for(let i=0;i<str.length;i++){
        if(i>=startIndex && i< endIndex){
            newstr=newstr+str[i]
        }
    }
    return newstr
}
const val=cutIt("Ilovepython",3,8)
console.log(val)