// 1. Задати користувачу питання і попросити ввести відповідь.

let massage = prompt("Яка “офіційна” назва JavaScript?");
console.log(massage);
if (massage === "ECMAScript") {
    alert("Правильно!");
} else {
    alert("Ви не знаєте? ECMAScript!");
}