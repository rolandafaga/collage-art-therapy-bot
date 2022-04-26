const express = require('express');
const path = require('path');
require('./static/assets/scripts/image_loader.js');

const app = express();
const port = process.env.PORT || 8080;

const router = express.Router();

app.use(express.static('static'));

app.get('/', (request, response) => {       
       response.sendFile(path.join(__dirname, './static/index.html'));
});

app.listen(port, () => {
       console.log('App started at http://localhost:' + port);       
});