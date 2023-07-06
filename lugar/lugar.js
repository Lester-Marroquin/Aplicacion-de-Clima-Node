const axios = require('axios');

const getLugarLatLng = async (dir) => {
    
    const encodedURL = encodeURI( dir )
    const apiKey = '4148a24f4ef296ddebadf7029fbd6e3a'

    const instance = axios.create({
        baseURL: `https://api.openweathermap.org/data/2.5/weather?q=${encodedURL}&appid=${apiKey}`,
        headers: {'X-RapidAPI-Key': '4148a24f4ef296ddebadf7029fbd6e3a'}
      });

      const resp = await instance.get();
          
      if (resp.data.cod === '404') {
        throw new Error(`No hay resultados para ${ dir }`);
    
      } else { 

        const ciudad  = resp.data.name;
        const lon     = resp.data.coord.lon;
        const lat     = resp.data.coord.lat;

        return {
            ciudad,
            lat,
            lon
        }
      }   
}

module.exports = {
    getLugarLatLng
}