// pending,resolved 

var d=new Promise(function(resolve){
    resolve("Hi")
})
function callback(){
    console.log(d)
}
d.then(callback)