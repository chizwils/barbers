const express = require('express');
//const bodyParser= require('body-parser');

const app = express();
const port = 9000;

const routes = require('./app_api/routes/routes.js');
routes(app);
app.listen(port, () => {
    console.log('We are live on ' + port);
});
