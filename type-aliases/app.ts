// type hasnain = string;
// let a: hasnain =  "Hasnain";
// console.log(a);



// type a = string | number | boolean;

// function abcd(obj : a){
//     return obj;
// }
// let save = abcd (false);
// console.log(save);


type address = {
    city : string,
    country: string
}

type student = {
    name: string,
    age : number,
    course : string,
    isEnrolled : boolean,
    addrss: address
}

let student1: student = {
    name: "Hasnain",
    age: 20,
    course: "webdevelopment",
    isEnrolled: true,
    addrss: {
        city: "karachi",
        country : "Pakistan "
    }
}
console.log(student1);



