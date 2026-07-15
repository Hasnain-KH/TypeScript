// function Name<T>(a: T): T{
// return a;
// }

// let save = Name("asslamualikum");
// console.log(save);


// function nameid<T, V>(a: T, b: V){
//     return `${a} ${b}`;
// }

// let show = nameid("Hasnain", 2313);
// console.log(show);


// function getFirst<T>(arr: T[]){
//     return arr[3];
// }

// let string = getFirst(["Ayan", "Sufyan", "Hasnain", "Aqib"]);
// let number = getFirst([1,2,3,4,5,6]);

// console.log(string);
// console.log(number);


function getage<T>(age: T[]){
    return age[2];
}


let studentage = getage([10, 30, 60]);
console.log(studentage);

function getstudentName <T>(name: T[]){
    return name;
}
let name1 = getstudentName(["Hasnain", "sufyan"]);
console.log(name1);
