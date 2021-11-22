let now = new Date();

function currentDate() {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let day = days[now.getDay()];
  let hour = now.getHours();
  let minute = now.getMinutes();
  if (minute < 10) {
    minute = `0${minute}`;
  }

  let todayDate = document.querySelector("#date-time");
  todayDate.innerHTML = `${day}, ${hour}:${minute}`;
}
currentDate();

function search(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-text-input");

  let city = document.querySelector("#current-city");
  city.innerHTML = searchInput.value;
}

let form = document.querySelector("#search-form");
form.addEventListener("submit", search);

function displayCelsius(event) {
  event.preventDefault();
  let currentTemp = document.querySelector("#current-temp");
  currentTemp.innerHTML = 16;
}

let celsiusTemp = document.querySelector("#celsius-link");
celsiusTemp.addEventListener("click", displayCelsius);

function displayFahrenheit(event) {
  event.preventDefault();
  let currentTemp = document.querySelector("#current-temp");
  currentTemp.innerHTML = 60;
}

let fahrenheitTemp = document.querySelector("#fahrenheit-link");
fahrenheitTemp.addEventListener("click", displayFahrenheit);
