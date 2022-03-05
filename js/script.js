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
  );

  const userDateInput = document.querySelector("#date").value;
  let weekday = new Date(userDateInput); // convert form date to date obj
  let day = weekday.getDay();
  // console.log(day);

  // loop thru object and match name
  // console.log(typeof userGenderInput);
  userGenderInput.forEach((choice) => {
    let nameGenerator = () => {
      if (choice.value == null) return choice.value;
      if (choice.value === "male")
        return `Your akan name is ${APP_DATA.maleAkanNames[day]} and u were born on a ${APP_DATA.days[day]}`;
      return `Your Akan name is ${APP_DATA.femaleAkanNames[day]} and u were born on a ${APP_DATA.days[day]}`;
    };
    console.log(nameGenerator());
  });
};
