const SAVED_PASSWORD = "12345Y";
const password = prompt("введіть пароль");
const isMatch = SAVED_PASSWORD === password;
console.log(isMatch);