const passwordbox = document.getElementById('inp');

let lenght = 8;
let uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowercase = "abcdefghijklmnopqrstuvwxyz";
let number = "1234567890";
let specialcharachter = "!@#$%^&*_><?/\~";

const allcharachter = uppercase + lowercase + number +specialcharachter;
const randomPassword = ()=>{
    let password = "";
    password += uppercase[Math.floor(Math.random()* uppercase.length)];
    password += lowercase[Math.floor(Math.random()* lowercase.length)];
    password += number[Math.floor(Math.random()* number.length)];
    password += specialcharachter[Math.floor(Math.random()* specialcharachter.length)];

    while(lenght>password.length){
    password += allcharachter[Math.floor(Math.random()* number.length)];
    }
    passwordbox.value = password;
}
function copypassword(){
    passwordbox.select();
    document.execCommand("copy");
}