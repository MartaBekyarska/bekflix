const express = require('express');
const app = express();
const covers = require('./shows');
const path = require('path');
const port = process.env.PORT || 3001;

app.get('/rest/shows', (req, res) => res.send(covers));
app.use(express.static(path.join(__dirname, '../../build')));
app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, '../../build', 'index.html'));
});
// app.get('/', function(req, response) {
//     response.send('hello world')
// })

app.listen(port, () => console.log(`Example app is listening!`));