const axios = require('axios');

const getClima = async (lat, lon) => {

    const apiKey = '4148a24f4ef296ddebadf7029fbd6e3a';
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`);

    return resp.data.main.temp
}

module.exports = {
    getClima
}