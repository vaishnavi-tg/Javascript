function kiratsReadFile(){
    let p=new Promise(function(resolve){
        setTimeout(function(){
            resolve("hi their")
        },3000)
        })
        return p
}

async function main(){
    let value=await kiratsReadFile()
    console.log("hi their 1")
}

main()
console.log("after main")