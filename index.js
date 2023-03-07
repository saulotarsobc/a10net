const axios = require('axios');
require('dotenv/config');

const auth = {
    username: process.env.A10_USERNAME,
    password: process.env.A10_PASSWORD,
};

// URL base da API da A10 Networks
const baseUrl = 'https://45.7.118.106/api/axapi/v3';

// Endpoint para listar pools de servidores
const poolEndpoint = `${baseUrl}/slb/server`;

// Cria uma instância do cliente axios com verificação SSL desativada
// const client = axios.create({ httpsAgent: false });

// Faz uma requisição GET para listar as pools de servidores
axios.get(poolEndpoint, { auth })
    .then(response => {
        // Manipula a resposta da API
        console.log(response.data);
    })
    .catch(error => {
        // Manipula o erro da API
        console.error(error.request);
    });