"use strict";

// store names and days
const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const maleAkanNames = [
  "Kwasi",
  "Kwadwo",
  "Kwabena",
  "Kwaku",
  "Yaw",
  "Kofi",
  "Kwame",
];

const femaleAkanNames = [
  "Akosua",
  "Adwoa",
  "Abenaa",
  "Akua",
  "Yaa",
  "Afua",
  "Ama",
];

//collect data from html
const dataForm = document.querySelector("form");
let userDateInput = document.querySelector("#date");
let userGender = document.querySelector("#gender").value;

//   set btn event
dataForm.addEventListener("submit", (e) => {
  e.preventDefault();

  //   let dateOfBirth = new Date(userDateInput.value);
  //   let dayOfWeek = dateOfBirth.getDay();
  //   console.log(dayOfWeek);

  //   console.log(userDateInput.value);
  //   console.log(userGender.value);
  //   let userData = new FormData(dataForm);

  //   console.log(userData);
  generateName();
});

// create function to get actual data
let generateName = () => {
  //   iterate myGender

  for (let g = 0; g < userGender.length; g++) {
    console.log(userGender[g].value.checked);
    for (let chk of userGender) {
      console.log(chk);
    }
    //   if(userGender[g].checked) {
    //       if(userGender[g].value === "male"){
    //           console.log(userGender[g]);
    //       }
    //   }
  }
};
