const express = require('express');

const cors = require('cors');
const path = require('path');
const router = require('./src/routes');
const {json, urlencoded} = express;
const app = express();
const port =process.env.PORT || 8080;

const corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200
}

app.use(cors(corsOptions));
app.use(router);
app.use('/', (req, res) => {

    res.send('<h1>This is the microservice v1.0.0</h1>');

})
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
})