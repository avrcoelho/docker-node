const express = require('express');

const PORT = 3000;
// forma do docker entender que vai ter que passar aporta 300 para a maquina
const HOST = '0.0.0.0 ';

const app = express();

app.get('/', (req, res) => {
  res.send('Hello world ');
});

app.listen(PORT, HOST);
