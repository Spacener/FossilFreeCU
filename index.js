const express = require('express')
const path = require('path')
const app = express()
const port = process.env.port || 3000
app.use(express.static(__dirname));



app.set('view engine', 'ejs');

app.get('/', function(req,res) {
    res.render(__dirname + '/home.ejs');
})

app.get('/about', function(req,res) {
    res.render(__dirname + '/about.ejs');
})

app.get('/resources', function(req,res) {
    res.render(__dirname + '/resources.ejs');
})

app.get('/app', function(req,res) {
    res.render(__dirname + '/app.ejs');
})

app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`)
})