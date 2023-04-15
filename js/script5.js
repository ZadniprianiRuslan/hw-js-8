let massage = prompt("Який номер поточного місяця?");

switch (massage) {
  case "1":
    console.log("Січень, зима.");
    break;

  case "2":
    console.log("Лютий, зима.");
    break;

  case "3":
    console.log("Березень, весна.");
    break;

  case "4":
    console.log("Квітень, весна.");
    break;

  case "5":
    console.log("Травень, весна.");
    break;

  case "6":
    console.log("Червень, літо.");
    break;

  case "7":
    console.log("Липень, літо.");
    break;

  case "8":
    console.log("Серпень, літо.");
    break;

  case "9":
    console.log("Вересень, осінь.");
    break;

  case "10":
    console.log("Жовтень, осінь.");
    break;

  case "11":
    console.log("Листопад, осінь.");
    break;

  case "12":
    console.log("Грудень, зима.");
    break;

  default:
    console.log("Такого місяця не існує");
}
