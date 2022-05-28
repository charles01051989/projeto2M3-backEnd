//require express
const express = require('express');
//stand port
const port = 3000;
const app = express();
//require cors
const cors = require('cors');

//require file "route"
const routes = require('./src/routes/paleta.route');

const connectToDataBase = require('./src/database/database');

connectToDataBase();

app.use(express.json());
app.use(cors());
app.use('/paletas', routes);

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
