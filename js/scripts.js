let form = document.getElementById('name_form');

let maleNameArrays = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
let femalNameArrays = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

function giveDayNumberofDate(val1){
  var number = "";
  var dt = new Date(val1)
  number = dt.getDay();
  return number;
}

function givePersonName(val2){

  var producedName = "";
  switch(val2){
    case 'Female':
      producedName = femalNameArrays[dayNumber];
      break;

    case 'Male':
      producedName = maleNameArrays[dayNumber];
      break; 
  }
  
  return producedName;
}

form.addEventListener('submit',(event) => {
  var assignedName = dayNumber = "";

  let dateExtract = form.elements['date_of_birth'];
  let dateOfBirth = dateExtract.value;

  let genderExtract = form.elements['gender'];
  let userGender = genderExtract.value; 
}