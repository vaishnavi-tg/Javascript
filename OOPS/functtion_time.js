function calSum(){
    a=0
    for (let i=0;i<100000;i++){
        a=a+i
    }    
    return a
}


const beforeDate =new Date()
const beforeTimeInMs=beforeDate.getTime()
calSum()
const afterDate=new Date()
const afterTimeInMs=afterDate.getTime()


console.log(afterTimeInMs-beforeTimeInMs)