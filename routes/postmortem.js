const express = require('express');
const router = express.Router();

router.get('/:id', (req, res) => {
    res.render('./pages/postmortem', {id: req.params})
})

router.post('/', (req, res) => {
    console.log(req.body)
    res.render('./pages/postmortem')
})

module.exports = router;