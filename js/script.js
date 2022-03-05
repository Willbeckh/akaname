"use strict";

// collect data from html
const generateButton = document.querySelector(".generate-btn");
const userGenderInput = document.querySelectorAll("#gender");

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturn",
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

// // button click event
generateButton.addEventListener("click", (e) => {
  e.preventDefault();

  const userDateInput = document.querySelector("#date").value;
  let weekday = new Date(userDateInput); // convert form date to date obj
  let day = weekday.getDay();
  console.log(maleAkanNames[day]);

  //   match name
  //   trying random stuff;
  userGenderInput.forEach((gender) => {
    // check gender and give name
    let akanName = () => {
      let selectedGender = gender.value;
      if (selectedGender === "male")
        return `Akan name is ${maleAkanNames[day]} and you were born on a ${days[day]}`;
      if (selectedGender === "female")
        return `Akan name is ${femaleAkanNames[day]}`;
    };

    console.log(akanName());
  });
});
