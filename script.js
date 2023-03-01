const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "1ac1b0533bmsh12d669a208ba84bp1b6dc6jsn794595b761ca",
    "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
  },
};

let getWeather = (city) => {
  let monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "June",
    "July",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  cityName.innerHTML = city;
  let t = new Date();
  let dateTime = document.getElementById("date-time");
  dateTime.innerHTML = `${t.getHours() % 12}:${t.getMinutes()} ${
    days[t.getDay()]
  } ${t.getDate()} ${monthNames[t.getUTCMonth()]} ${t.getFullYear()}`;

  fetch(
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + city,
    options
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      return response.json();
    })
    .then((response) => {
      console.log(response);
      // console.log(typeof response.status);

      cloud_pct.innerHTML = response.cloud_pct;
      temp.innerHTML = response.temp;
      // feels_like.innerHTML = response.feels_like;
      humidity.innerHTML = response.humidity;
      // min_temp.innerHTML = response.min_temp;
      // max_temp.innerHTML = response.max_temp;
      wind_speed.innerHTML = response.wind_speed;
      // wind_degrees.innerHTML = response.wind_degrees;
      // sunrise.innerHTML = response.sunrise;
      // sunset.innerHTML = response.sunset;
    })
    .catch((err) => {
      if (error.message === "Failed to fetch data") {
        let cloud_pct = document.getElementById("cloud_pct");
        let temp = document.getElementById("temp");
        let humidity = document.getElementById("humidity");
        let wind_speed = document.getElementById("wind_speed");

        cloud_pct.innerHTML = "";
        temp.innerHTML = "";
        humidity.innerHTML = "";
        wind_speed.innerHTML = "";
      } else {
        console.error(err);
      }
    });
};

submit.addEventListener("click", (e) => {
  e.preventDefault();
  getWeather(city.value);
});

getWeather("Delhi");
