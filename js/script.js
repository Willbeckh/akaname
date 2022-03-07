"use strict";

// collect data from html
const formData = document.querySelector("#form");
const days = [
  "Sunday 😇",
  "Monday",
  "Tuesday",
  "Wednesday 🤩",
  "Thursday🆒",
  "Friday",
  "Saturday😎",
];
const akanNames = {
  female: ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"],
  male: ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"],
};

// validating forms
const validateData = (submit) => {
  submit.preventDefault();

  const date = document.querySelector("#date").value;
  if (date === "") return alert("No date entered!");

  const userDateInput = new Date(date);
  if (new Date() - userDateInput < 0)
    return alert("Oops, Looks like you're a time traveller. Pick a past date.");

  const userGenderInput = document.querySelector(
    "input[name='gender']:checked"
  );

  if (userGenderInput === null) return alert("Please select a gender.");
  const day = userDateInput.getDay();
  formData.reset(); // reset form 
const createAkanName = (genderChoice, dayOfweek) =>
  akanNames[genderChoice][dayOfweek];

// displays feedback to user.
const nameOutput = (akanName, birthday) => {
  document.querySelector(".akan-name").innerText = akanName;
  return (document.querySelector(".birthday").innerText = days[birthday]);
};

formData.addEventListener("submit", validateData);
