class Animal{
    constructor(name,legCount,speaks){
        this.name=name
        this.legCount=legCount
        this.speaks=speaks
    }
    speaks(){
         console.log("hi their"+this.speaks)
    }
    static myType(){
        console.log("Static Animal")
    }
}

let dog=new Animal("dog",4,"bhow bhow")//normal class creating object and calling through it 
console.log(dog)
Animal.myType() //Since i am using static i can directly call the function with class 

// if u want to call the function on the class it self without creating a object for it



