const axios = require('axios');

const getWeather = async( lat, lng ) => {
   const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=363535deeda8dfba242588055af68546`);

   return response.data.main.temp;
}

module.exports = {
    getWeather
}