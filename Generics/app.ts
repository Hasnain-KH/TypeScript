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


function getFirst<T>(arr: T[]){
    return arr[0];
}

let cons = getFirst(["Ayan", "Sufyan", "Hasnain"]);

console.log(cons);
