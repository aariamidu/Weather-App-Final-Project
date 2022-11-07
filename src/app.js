function displayTemperature(response) {
  console.log(response.data.main.temp);
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = response.data.main.temp;
}
let apiKey = "3a347c4310cafc46o98tad7838da2e8b";
let apiUrl =
  "https://api.shecodes.io/weather/v1/current?query=London&key={apikey}&units=metric";
axios.get(apiUrl).then(displayTemperature);
