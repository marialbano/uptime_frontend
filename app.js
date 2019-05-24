const express = require('express');
const app = express();

const faker = require('faker')
const bodyParser = require('body-parser')
const urlencodedParser = bodyParser.urlencoded({ extended: true });


app.engine('ejs', require('ejs-locals'));
app.set('views', __dirname + '/template');
app.set('view engine', 'ejs')    // Setamos que nossa engine será o ejs
//app.use(expressLayouts)          // Definimos que vamos utilizar o express-ejs-layouts na nossa aplicação
app.use(bodyParser.urlencoded()) // Com essa configuração, vamos conseguir parsear o corpo das requisições

app.get('/login', (req, res) => {
    res.render('./pages/login')
  })


app.get('/', (req, res) => {
        res.render('./pages/home')
    })

app.get('/office', (req, res) => {
        res.render('./pages/office')
    })

app.get('/office/new', urlencodedParser, function (req, res){
        res.render('./pages/newOffice')
    });

app.post('/office/new', urlencodedParser, function (req, res){
        console.log(req.body)
        res.render('./pages/office')
    });

app.get('/office/edit', urlencodedParser, function (req, res){
        res.render('./pages/editOffice')
    });

app.post('/office/edit', urlencodedParser, function (req, res){
        console.log(req.body)
        res.render('./pages/office')
    });


app.get('/events', (req, res) => {
        res.render('./pages/events')
    })


app.get('/events/1', (req, res) => {
        res.render('./pages/eventInfo')
    })

app.get('/postmortem', (req, res) => {
        res.render('./pages/postmortem')
    })

app.post('/postmortem', (req, res) => {
        console.log(req.body)
        res.render('./pages/postmortem')
    })

app.get('/postmortem1', (req, res) => {
        res.render('./pages/postmortem1')
    })

app.use(express.static(__dirname + '/static'))
app.listen(3000)
console.log('Servidor iniciado em http://localhost:3000')