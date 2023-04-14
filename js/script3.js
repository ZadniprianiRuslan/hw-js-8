const x1 = 10;
const x2 = 30;
const number = 45; 
if (x1 < number && number < x2) {
    console.log("true");
} else {
    console.log("number не попадає в відрізок від x1 до x2");
} 
if (number < x1) {
    console.log("true");
} else {
    console.log("false");
}
if (x2 < number) {
    console.log("число попадає у відрізок після x2");
}
