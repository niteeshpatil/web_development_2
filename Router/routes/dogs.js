const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('all dogs')
})

router.post('/', (req, res) => {
    res.send('new dogs')
})

router.get('/:id', (req, res) => {
    res.send('viweing one dogs')
})

router.get('/:id/edit', (req, res) => {
    res.send("editing one dogs")
})

module.exports = router;