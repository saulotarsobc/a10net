const axios = require('axios');
require('dotenv/config');

const auth = {
    username: process.env.A10_USERNAME,
    password: process.env.A10_PASSWORD,
};

// URL base da API da A10 Networks
const baseUrl = `https://${process.env.A10_ADDRESS}/api/axapi/v3`;

// Endpoint para listar pools de servidores
const poolEndpoint = `${baseUrl}/slb/server`;

// Cria uma instância do cliente axios com verificação SSL desativada
const client = axios.create({ httpsAgent: false });

// Faz uma requisição GET para listar as pools de servidores
client.get(poolEndpoint, { auth })
    .then(response => {
        // Manipula a resposta da API
        console.log(response.data);
    })
    .catch(error => {
        // Manipula o erro da API
        console.error(error);
    });