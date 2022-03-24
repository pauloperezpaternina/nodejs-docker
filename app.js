const express = require('express');

const cors = require('cors');
const path = require('path');
const {json, urlencoded} = express;
const app = express();
const port =process.env.PORT || 8080;
