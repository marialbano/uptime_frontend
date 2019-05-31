const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('./pages/office')
})

router.get('/new', function (req, res){
    res.render('./pages/newOffice')
});

router.post('/new', function (req, res){
    res.render('./pages/office')
});

router.get('/edit/:id', function (req, res){

    res.render('./pages/editOffice', {id: req.params})
});

router.post('/edit', function (req, res){
    console.log(req.body)
    res.render('./pages/office')
});

module.exports = router;