const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('./pages/events')
})


router.get('/:id', (req, res) => {
    res.render('./pages/eventInfo')
})

module.exports = router;