
const particlesConfigScript = document.createElement('script');
particlesConfigScript.src = 'particles-config.js';
document.head.appendChild(particlesConfigScript);


particlesConfigScript.onload = () => {
    particlesJS('particles-js', particlesConfig);
};


function getWeather() {

}

function getWeather() {
  const apiKey = 'bac917f566cf496fde64c55f913db063';
  const cityInput = document.getElementById('cityInput').value;
  const weatherInfo = document.getElementById('weatherInfo');

  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=${apiKey}&units=metric`)
      .then(response => response.json())
      .then(data => {
          const temperature = data.main.temp;
          const description = data.weather[0].description;
          const cityName = data.name;

          const weatherText = `Current weather in ${cityName}: ${temperature}°C, ${description}.`;
          weatherInfo.innerHTML = weatherText;
      })
      .catch(error => {
          console.error('Error fetching weather data:', error);
          weatherInfo.innerHTML = 'Error fetching weather data. Please try again.';
      });
}

