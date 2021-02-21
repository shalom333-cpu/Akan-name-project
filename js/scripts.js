let form = document.getElementById('name_form');

let maleNameArrays = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
let femalNameArrays = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

function giveDayNumberofDate(val1){
  var number = "";
  var dt = new Date(val1)
  number = dt.getDay();
  return number;
}