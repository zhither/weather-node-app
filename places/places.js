const axios = require('axios');


const getPlaceLatLng = async( dir ) => {

    const encodedUrl = encodeURI(dir);

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodedUrl}`,
        headers: {'x-rapidapi-key':'223928f8ddmsh6ee1cdd51d2ad29p13166djsne445870b7196'}
    });
    
    const response = await instance.get()

    if( response.data ){
        throw new Error(`No hay resultados para ${dir}`)
    }

    const data = response.data.Results[0];
    const direction = data.name;
    const lat = data.lat; 
    const lng = data.lon;

    return {
        direction,
        lat,
        lng
    }
    
}

module.exports = {
    getPlaceLatLng
}