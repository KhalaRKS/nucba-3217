const form = document.querySelector("form");
const cityInput = document.querySelector(".search-input");
const cardContainer = document.querySelector(".card-container");
const searchMsg = document.querySelector(".search-msg");

// Función que nos redondea un numero a entero
const roundNumber = (number) => {
  return Math.round(number);
};

// Funcion que va a adaptar la información de la ciudad recibida por la api, a un objeto mas manipulable y legible

const getCityData = (cityData) => {
  return {
    cityName: cityData.name,
    imageName: cityData.weather[0].icon,
    cityWeatherInfo: cityData.weather[0].description,
    cityTemp: roundNumber(cityData.main.temp),
    cityMaxTemp: roundNumber(cityData.main.temp_max),
    cityMinTemp: roundNumber(cityData.main.temp_min),
    cityST: roundNumber(cityData.main.feels_like),
    cityHumidity: cityData.main.humidity,
  };
};

// Funcion que va a crear el html de la tarjeta de la ciudad buscada

const createCityTemplate = (cityData) => {
  const {
    cityName,
    imageName,
    cityWeatherInfo,
    cityTemp,
    cityMaxTemp,
    cityMinTemp,
    cityST,
    cityHumidity,
  } = getCityData(cityData);

  return `
        <div class="weather-card animate">
          <div class="weather-info-container">
                  <h2 class="weather-title">${cityName}</h2>
                  <p class="weather-description">${cityWeatherInfo}</p>
                  <div class="weather-temp-container">
                    <span class="weather-temp">${cityTemp}°</span>
                    <span class="weather-st">${cityST}° ST</span>
                  </div>
                </div>
                <div class="weather-img-container">
                <img src="./assets/img/${imageName}.png" alt="weather image"/>
                </div>
                <div class="weather-extra-container">
                  <div class="weather-minmax-container">
                    <span class="weather-span"
                      ><i class="fa-solid fa-arrow-up-long"></i>Max: ${cityMaxTemp}º</span
                    >
                    <span class="weather-span"
                      ><i class="fa-solid fa-arrow-down-long"></i>Min: ${cityMinTemp}º</span>
             </div>
           <span class="weather-humidity">${cityHumidity}% Humedad</span>
        </div>
        </div>
        `;
};

// Función la card del clima en el html

const renderCityCard = (cityData) => {
  cardContainer.innerHTML = createCityTemplate(cityData);
};

//Función para cambiar el mensaje de busqueda de la ciudad una vez que se haya realizado la busqueda

const changeSearchMsg = (cityData) => {
  const cityName = cityData.name;
  searchMsg.innerHTML = `Así está el clima en ${cityName}, ¿Querés ver el clima de otra ciudad?`;
};

// Función que retorna true si el input de la ciudad esta vacio.

const isEmptyInput = () => {
  return cityInput.value.trim() === "";
};

// Función que validara si la ciudad buscada EXISTE

const isInvalidCity = (cityData) => {
  return !cityData.id;
};

// Función que va a realizar la busqueda y renderiza de la ciudad buscada.
// En caso de no encontrarla, debera mostrar un error diciendo "No existe la ciudad"

const searchCity = async (e) => {
  e.preventDefault();

  if (isEmptyInput()) {
    alert("Debes ingresar una ciudad");
    return;
  }

  const city = cityInput.value.trim();
  const fetchedCity = await requestCity(city);

  if (isInvalidCity(fetchedCity)) {
    alert("No existe la ciudad");
    form.reset();
    return;
  }

  renderCityCard(fetchedCity);
  changeSearchMsg(fetchedCity);
  form.reset();
};

const init = () => {
  form.addEventListener("submit", searchCity);
};
init();
