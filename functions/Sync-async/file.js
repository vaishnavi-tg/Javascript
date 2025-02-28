const fs=require("fs") //file system module
fs.readFile("a.txt","utf-8",function(err,data){
    console.log(data);
})

console.log("Hiii their")
let a=0
//takes longer than file read
for (let i=0;i<10000000000;i++){
    a=a+i
}
console.log("hi their 2")