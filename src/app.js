function formatDate(timestamp) {
  let date = new Date(timestamp);
  let hours = Date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = Date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[date.getDay()];
  return `${day} ${hours}:${minutes}`;
}
function displayTemperature(response) {
  console.log(response.data.main.temp);
  let temperatureElement = document.querySelector("#temperature");
  let cityElement = document.querySelector("#city");
  let descriptionElement = document.querySelector("#description");
  let humidityElement = document.querySelector("#humidity");
  let windElement = document.querySelector("#wind");
  let timeElement = document.querySelector("#time");
  let iconElement = document.querySelector("#icon");
  temperatureElement.innerHTML = Math.round(response.data.main.temp);
  cityElement.innerHTML = response.data.name;
  descriptionElement.innerHTML = response.data.weather[0].description;
  humidityElement.innerHTML = Math.round(response.data.main.humidity);
  windElement.innerHTML = Math.round(response.data.main.wind.speed);
  timeElement.innerHTML = formatDate(response.data.dt * 1000);
  iconElement.innerHTML =
    "http://shecodes-assets.s3.amazonaws.com/api/weather/icons/broken-clouds-day.png";
}
let city = "London";
let apiKey = "3a347c4310cafc46o98tad7838da2e8b";
let apiUrl =
  "https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric";
axios.get(apiUrl).then(displayTemperature);
