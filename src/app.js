import { bodyParser} from 'body-parser';

const express = require('express');
const bodyParser = require('body-parser');
const cors = require ('cors');
const connectDatabase = require('./services/initializeDataBase');

require('./src/model/setSchema');
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

connectDatabase();

app.use('/api/v1', require('./routes'));

app.listen(8080, () => {
    console.log(`Servidor rodando na porta 8080!`)
});