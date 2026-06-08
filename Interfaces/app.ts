interface User {
    name: string
    email: string
}
const userdata: User = {
    name: "Hasnain",
    email: "Hasn@gmail.com"
}
function abcd (userdata: User): void{
    console.log(userdata.email);
}
abcd(userdata);

