const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    return res.render('base');
});

router.post('/', (req, res) => {
    return res.send({message: "POST OK para raiz"});
});


module.exports = router;