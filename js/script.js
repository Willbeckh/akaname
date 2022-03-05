"use strict";

// collect data from html
const generateButton = document.querySelector(".generate-btn");
const userGenderInput = document.querySelectorAll("input[name='gender']");
const displayName = document.querySelector(".text");

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

// // button click event
generateButton.addEventListener("click", (e) => {
  e.preventDefault();

  // call generate names function
  generateName();
});

// Name generation.
let generateName = () => {
  const userDateInput = document.querySelector("#date").value;
  let weekday = new Date(userDateInput); // convert form date to date obj
  let day = weekday.getDay();

  userGenderInput.forEach((gender) => {
    // console.log(selectedGender);
    const akanName = () => {
      let selectedGender = gender.value;

      if(selectedGender === "male")
        return `Akan name is ${maleAkanNames[day]} and you were born on a ${days[day]}`;
      return `Akan name is ${femaleAkanNames[day]} and you were born on a ${days[day]}`;
    };
    console.log(akanName());
  });

  //   match name
  //   trying random stuff;
  // userGenderInput.forEach((gender) => {
  //   // check gender and give name
  //   let akanName = () => {
  //     let selectedGender = gender.value;
  //     if (selectedGender === "male")
  //       displayName.innerHTML = `Akan name is ${maleAkanNames[day]} and you were born on a ${days[day]}`;
  //     if (selectedGender === "female")
  //       displayName.innerHTML = `Akan name is ${femaleAkanNames[day]} and you were born on a ${days[day]}`;
  //   };

  //   console.log(akanName());
  // });
};
