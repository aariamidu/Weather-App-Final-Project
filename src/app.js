function displayTemperature(response) {
  console.log(response.data.main.temp);
  let temperatureElement = document.querySelector("#temperature");
  let cityElement = document.querySelector("#city");
  let descriptionElement = document.querySelector("#description");
  let humidityElement = document.querySelector("#humidity");
  let windElement = document.querySelector("#wind");
  let timeElement = document.querySelector("#time");
  temperatureElement.innerHTML = Math.round(response.data.main.temp);
  cityElement.innerHTML = Math.round(response.data.name);
  descriptionElement.innerHTML = Math.round(
    response.data.weather[0].description
  );
  humidityElement.innerHTML = Math.round(response.data.main.humidity);
  windElement.innerHTML = Math.round(response.data.main.wind.speed);
}
let apiKey = "3a347c4310cafc46o98tad7838da2e8b";
let apiUrl =
  "https://api.shecodes.io/weather/v1/current?query=London&key={apiKey}&units=metric";
axios.get(apiUrl).then(displayTemperature);
