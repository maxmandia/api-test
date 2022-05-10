const text = document.querySelector("h1");

async function getWeather() {
  const response = await fetch(
    "http://api.openweathermap.org/data/2.5/weather?q=Manhatten&APPID=3da5c3381848720611ad107fbe1cd5e2",
    { mode: "cors" }
  );
  const weatherData = await response.json();
  text.textContent = weatherData.main.temp;
  console.log(weatherData);
}

getWeather();
