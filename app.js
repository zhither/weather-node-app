const place = require('./places/places');
const weather = require('./wather/weather');

const argv = require("yargs").options({
    direction : {
        alieas: 'd',
        desc: 'Direction of the city to retrieve the weather',
        demand: true
    }
}).argv;

const getInfo = async( direction ) => {
    try {
        const coordinates = await place.getPlaceLatLng( direction );
        const temp = await weather.getWeather( 40.70000 , -74.000000);
        return `El clima de ${direction} es de ${temp}`;
    } catch (error) {
        return `No se pudo determinar el clima de ${direction}`;
    }
}

getInfo( argv.direction )
    .then( console.log );