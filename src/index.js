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

function showTemperature(response) {
  let temperature = Math.round(response.data.main.temp);
  let city = response.data.name;

  let tempDisplay = document.querySelector("#current-temp");
  tempDisplay.innerHTML = temperature;
  let cityDisplay = document.querySelector("#current-city");
  cityDisplay.innerHTML = city;
}

function search(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-text-input");

  let apiKey = "60eb3beb1273b192a3e9365df3418b28";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${searchInput.value}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(showTemperature);
}

function currentTemperature(response) {
  let temperature = Math.round(response.data.main.temp);
  let city = response.data.name;

  let currentTemp = document.querySelector("#current-temp");
  currentTemp.innerHTML = temperature;
  let currentCity = document.querySelector("#current-city");
  currentCity.innerHTML = city;
}

function showPosition(position) {
  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;

  let apikey = "60eb3beb1273b192a3e9365df3418b28";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apikey}&units=metric`;

  axios.get(apiUrl).then(currentTemperature);
}

function locate(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(showPosition);
}

let currentButton = document.querySelector("#current-location");
currentButton.addEventListener("click", locate);

let form = document.querySelector("#search-form");
form.addEventListener("submit", search);
