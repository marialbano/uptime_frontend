const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('./pages/postmortem')
})

router.post('/', (req, res) => {
    console.log(req.body)
    res.render('./pages/postmortem')
})

router.get('/:id', (req, res) => {
    res.render('./pages/postmortem1')
})

module.exports = router;