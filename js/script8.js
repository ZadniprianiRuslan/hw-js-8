const name = "Ruslan".length;
const secondName = "Zadnipriani".length;
console.log(name);
console.log(secondName);
let result;

if (name > 4 && secondName > 5) {
  result = name.length + secondName.length;
} else {
  result = "ОЙ, неможливо виконати умову";
}
console.log(result);
