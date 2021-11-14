const express = require('express');
const app = express();
const cookieparse = require('cookie-parser');
app.use(cookieparse('thisismysecret'));

app.get('/greet', (req, res) => {
    const { name = '' } = req.cookies;
    res.send(`hey there ${name}`);
})

app.get('/setname', (req, res) => {
    console.log(req.cookies);
    res.cookie('name', 'stevie');
    res.cookie('birth date', '9/4/2001');
    res.send('ok send you a cookie');
})

app.get('/getsignedcookie', (req, res) => {
    res.cookie('fruit', 'apple', { signed: true });
    res.send('ok sigined cookie is sent');
})

app.get('/verifycookis', (req, res) => {
    console.log(req.cookies);
    // res.send(req.cookies);
    res.send(req.signedCookies);
})

app.listen(3000, () => {
    console.log("serving on 3000");
})