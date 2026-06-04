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


function logMethod(target: any,propertyName: string, descriptor: PropertyDescriptor) {
  console.log("Method is being called:", propertyName);
}

class Student {
  @logMethod
  sayHello() {
    console.log("Hello!");
  }
}


