const age = 55;
let type;

if (age >= 0 && age <= 16) {
    type = "child"
} else if (age >= 17 && age <= 60) {
    type = "adult"
} else if (age >= 61 && age <= 100) {
    type = "old"
}

console.log(type);