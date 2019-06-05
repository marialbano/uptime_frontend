const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('./events')
})


router.get('/:id', (req, res) => {
    res.render('./postmortem', {id: req.params})
})

module.exports = router;