const express = require('express');
const router = express.Router();


router.use((req, res, next) => {
    if (req.query.isAdmin) {
        return next()
    }
    else {
        res.send('sorry not admin')
    }
})
router.get('/secret', (req, res) => {
    res.send('the thing is.........')
})

router.get('/deleteall', (req, res) => {
    res.send('deleted all')
})


module.exports = router;