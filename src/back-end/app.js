const express = require('express');
const app = express();
const covers = require('./shows');

app.get('/rest/shows', (req, res) => res.send(covers))

app.listen(3001, () => console.log(`Example app is listening!`))