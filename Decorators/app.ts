// function logger(constructor: Function){
//     console.log("Decorator chal gaya !");
// }

// @logger

// class student{}

// function logger1 (constructor: Function){
//     console.log("OH, It's running");
// }
// @logger1
// class person{}


// function load(constructor : Function){
//     console.log("Student class loaded");
// }
// @load
// class student{}


function loader(constructor: Function){
    console.log(constructor.name);
    
}

@loader

class admin{}

@loader
class coreAdmin{}