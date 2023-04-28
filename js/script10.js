// записати змінні

const priceItem = Math.random() * (5000 - 500) + 1;
const goods = 50;
let totalPrice = 0;
for (let i = 1; i <= 50; i += 1){
    totalPrice = totalPrice + priceItem;
}
console.log(totalPrice);