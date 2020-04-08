'use strict';

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3005;

app.get('/screenshot-service-dev', (req, res) => res.send('Screenshot service DEV'));
app.listen(3005);
