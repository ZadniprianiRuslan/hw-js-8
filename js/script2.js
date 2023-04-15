let month;
const lang = "ua";

switch (lang) {
  case "ua":
    month = "Січень";
    break;

  case "en":
    month = "January";
    break;

  case "fr":
    month = "Janvier";
    break;

  default:
    console.log("Invalid language");
}

console.log(month);