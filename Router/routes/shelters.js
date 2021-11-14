const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('all shelter')
})

router.post('/', (req, res) => {
    res.send('new shelter')
})

router.get('/:id', (req, res) => {
    res.send('viweing one shelter')
})

router.get('/:id/edit', (req, res) => {
    res.send("editing one shelter")
})

module.exports = router;