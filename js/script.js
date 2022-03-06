"use strict";

// collect data from html
const generateButton = document.querySelector(".generate-btn");
const displayName = document.querySelector(".text");

const APP_DATA = {
  days: [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ],

  maleAkanNames: [
    "Kwasi",
    "Kwadwo",
    "Kwabena",
    "Kwaku",
    "Yaw",
    "Kofi",
    "Kwame",
  ],

  femaleAkanNames: ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"],
};

// // button click event
generateButton.addEventListener("click", (e) => {
  e.preventDefault();

  // call generate names function
  generateName();
});

// Name generation.
let generateName = () => {
  const userGenderInput = document.querySelectorAll(
    "input[name='gender']:checked"
  ); // gets checked option of radio input

  const userDateInput = document.querySelector("#date").value;
  let weekday = new Date(userDateInput); // convert from string to date obj
  let day = weekday.getDay();
  // console.log(day);

  // loop thru object and match name
  userGenderInput.forEach((choice) => {
    let nameGenerator = () => {
      let userChoice = choice.value; // stores the checked value

      if (userChoice === null); // prevent empty choices of gender
      if (userChoice === "male")
        return `Your akan name is ${APP_DATA.maleAkanNames[day]} and u were born on a ${APP_DATA.days[day]}`;
      return `Your Akan name is ${APP_DATA.femaleAkanNames[day]} and u were born on a ${APP_DATA.days[day]}`;
    };
    console.log(nameGenerator());
  });
};
