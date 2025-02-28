// Set time out is a global function tjat is builtin in  js
// setTimeout calls a function after certain duration
function greet(){
    console.log("Hello world")
}


function greetalien(){
    console.log("Hello alien")
}

setTimeout(greetalien,5000)
setInterval(greetalien,1000)

