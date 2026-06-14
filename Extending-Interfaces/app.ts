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


interface User{
    name: string,
    email: string
}

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


let obj3: User = {
    name: "Hasnain",
    email: "Ayan@gmail.com",
}

console.log(obj3);
