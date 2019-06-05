const express = require('express');
const router = express.Router();

router.get('/:id', (req, res) => {
    res.render('./postmortem', {id: req.params})
})

router.post('/', (req, res) => {
    console.log(req.body)
    res.render('./postmortem')
})

module.exports = router;