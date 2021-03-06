const express = require('express')
const path = require('path')
const app = express()
const port = process.env.PORT || 3000
app.use(express.static(__dirname));
app.set("views", "/views/")



app.set('view engine', 'ejs');

app.get('/', function(req,res) {
    res.render(__dirname + '/views/home.ejs');
})

app.get('/about', function(req,res) {
    res.render(__dirname + '/views/about.ejs');
})

app.get('/resources', function(req,res) {
    res.render(__dirname + '/views/resources.ejs');
})

app.get('/app', function(req,res) {
    res.render(__dirname + '/views/app.ejs');
})

app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`)
})