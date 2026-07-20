// interface User {
//     name: string,
//     email: string
// }

// interface Admin extends User {
//     password : number
// }
// function fun(obj: Admin){
//     return obj;
// }

// let save = fun({name: "Hasnain", email: "hasnain@gmail.com", password: 3434});
// let save1 = fun({name: "Hasnain", email: "hasnain@gmail.com"});
// console.log(save);
// console.log(save1);


// interface User1{
//     name: string
// }

// interface User2 extends User1{
//     email : string
// }

// function userdata (obj : User2){
//     return obj;
// }

// let showdata = userdata({name: "Ayan", email: "Ayan@gmail.com"})
// let showdata1 = userdata({name: "sufyan", email: "sufyan@gmail.com"})
// console.log(showdata);
// console.log(showdata1);


// interface User{
//     name: string,
//     email: string
// }

// interface Admin extends User{
//     password: number
// }

// let obj: Admin = {
//     name: "Hasnain",
//     email: "has@gmail.com",
//     password: 2323
// }
// console.log(obj);

// let obj1: Admin = {
//     name: "Ayan ",
//     email: "Ayan@gmail.com ",
//     password: 4345
// }
// console.log(obj1);


// let obj3: User = {
//     name: "Hasnain",
//     email: "Ayan@gmail.com",
// }

// console.log(obj3);



// interface Stuff {
//     name: string,
//     price: number,
//     quality: string,
//     instock: true
// }

// interface Stuffs extends Stuff{
//     size: string;
// }

// function myproduct (get: Stuff){
//     return get;
// }

// let product1 = ({name: "laptop", price: 40000, quality: "Nice", instock: true, size: 20});
// let product2 = ({name: "PC", price: 900000, quality: "Nice", instock: true, size: 10});
// console.log(product1);
// console.log(product2);


interface Person {
    name: string,
    age: number
}


interface Student extends Person{
        rollNumber: number
}

let stu1:Student = {
    name: "Hasnain",
    age: 19,
    rollNumber: 101
}

console.log(stu1);



// interface Teacher extends Person {
//     subject: string;
// }

// let teacher1:Teacher = {
//     name: "SirHasanin",
//     age: 18,
//     subject: "Physics"
// }


// let teacher2: Teacher = {
//     name: "SirAqib",
//     age: 20,
//     subject: "Math"
// }
// console.log(teacher1);
// console.log(teacher2);


interface Person {
    name: string, 
    age : number
}

interface Employee extends Person{
    salery: number,
    company: string
}


interface Manager extends Employee{
    department: string, 
    experience: number
}

let manager1: Manager = {
    name: "Hasnain",
    age: 20, 
    salery: 600000,
    company: "Software House",
    department: "IT",
    experience: 0
}

console.log(manager1);
