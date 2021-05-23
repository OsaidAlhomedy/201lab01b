let userName = prompt('What is your name ?');
console.log(userName);
let userBros = prompt('How many brothers do you have ?')
console.log(userBros);
let userSis = prompt('How many sisters do you have ?')
console.log(userSis);
let userPet = prompt ('Do you have a pet ? , hint: write yes or no')
console.log(userPet);

if (userPet === '11yes') {
    userPet = "have";
} else{
    userPet = "don't have"
}

alert(`Your name is ${userName} and you have ${userBros} brother and ${userSis} sister, you also ${userPet} pets`)