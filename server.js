const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.status(200).send({message: 'Olá mundo estou a funcionar',});
});

app.get('/ola', (req, res) => {
  res.status(200).send({message: 'Oii, eu sou a rota Olá',});
});

app.listen(3001, () => {
  console.log('Api na porta 3001');
});
