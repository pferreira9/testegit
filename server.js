const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.status(200).send({
    message: 'Olá mundo estou a funcionar',
  });
});

app.listen(3001, () => {
  console.log('Api na porta 3001');
});
