const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('./office')
})

router.get('/new', function (req, res){
    res.render('./newOffice')
});

router.post('/new', function (req, res){
    res.render('./office')
});

router.get('/edit/:id', function (req, res){

    res.render('./editOffice', {id: req.params})
});

router.post('/edit', function (req, res){
    console.log(req.body)
    res.render('./office')
});

module.exports = router;