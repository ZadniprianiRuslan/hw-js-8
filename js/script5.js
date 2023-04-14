const subscription = "pro";
let cost;
if (subscription === "free") {
    cost = 0;
} else if (subscription === "pro") {
    cost = 100;
} else if (subscription === "premium") {
    cost = 500;
}
console.log(cost);