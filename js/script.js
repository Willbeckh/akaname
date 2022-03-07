"use strict";

// collect data from html
// const generateButton = document.querySelector(".generate-btn");
const formData = document.querySelector("#form");
const displayName = document.querySelector(".akan-name");

const days = [
  "Sunday 😇",
  "Monday 🙂",
  "Tuesday 😉",
  "Wednesday 🤩",
  "Thursday 😂",
  "Friday 😛",
  "Saturday 😎",
];

const akanNames = {
  male: ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"],

  female: ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"],
};

// Name generation.
const validateData = (submit) => {
  submit.preventDefault();

  const date = document.querySelector("#date").value;
  if (date === "") return alert("No date entered!");

  const userDateInput = new Date(date);
  if (new Date() - userDateInput < 0)
    return alert(
      "Oops, Looks like you're a time traveller.🙃 provide a date past today."
    );

  const userGenderInput = document.querySelector(
    "input[name='gender']:checked"
  );

  if (userGenderInput === null) return alert("Please select Gender.");

  const day = userDateInput.getDay();
  createAkanName(userGenderInput.value, day);

  formData.reset();
};

const createAkanName = (gender, dayOfWeek) => akanNames[gender][dayOfWeek];

formData.addEventListener("submit", validateData);
