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

// adicionando arquivo de rotas
const officeRoute = require('./routes/office');
const eventsRoute = require('./routes/events');
const postmortemRoute = require('./routes/postmortem');

app.use('/office', officeRoute);
app.use('/events', eventsRoute);
app.use('/postmortem', postmortemRoute);

app.get('/login', (req, res) => {
    res.render('./pages/login')
  })

app.get('/', (req, res) => {
        res.render('./pages/home')
    })

app.use(express.static(__dirname + '/static'))
app.listen(3000)

module.exports = app;

console.log('Servidor iniciado em http://localhost:3000')