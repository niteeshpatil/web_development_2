const express = require('express');
const app = express();
const User = require('./models/user');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const session = require('express-session');

app.use(session({ secret: 'itisconfideceal' }))

app.set('view engine', 'ejs');
app.set('views', 'views');



mongoose.connect('mongodb://localhost:27017/use', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("MONGO CONNECTION OPEN!!!")
    })
    .catch(err => {
        console.log("OH NO MONGO CONNECTION ERROR!!!!")
        console.log(err)
    })

app.use(express.urlencoded({ extended: true }))

const requerlogin = (req, res, next) => {
    if (!req.session.user_id) {
        return res.redirect('/login');
    }
    next();
}

app.get('/', requerlogin, (req, res) => {
    res.send("welcome")
})


app.get('/signup', (req, res) => {
    res.render('register.ejs')
})


app.get('/secret', requerlogin, (req, res) => {
    res.render('secret.ejs');
})

app.post('/logout', (req, res) => {
    // req.session.user_id = null;
    req.session.destroy();
    res.redirect('/login');
})

app.get('/login', (req, res) => {
    res.render('login.ejs');
})

app.post('/login', async (req, res) => {
    const { username, password } = req.body;
    const isuser = await User.findAndValidate(username, password);
    if (isuser) {
        req.session.user_id = isuser._id;
        res.redirect('/secret');
    }
    else {
        res.send("Incorect username or password");
    }
})


app.post('/signup', async (req, res) => {
    const { password, username } = req.body;
    const user = new User({ username, password })
    await user.save();
    req.session.user_id = user._id;
    res.redirect('/secret');
})


app.listen(3000, () => {
    console.log("serving on 3000");
})