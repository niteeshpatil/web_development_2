const express = require('express');
const app = express();
const morgan = require('morgan');
app.use(morgan('tiny'));

app.use((req, res, next) => {
    // req.method = "GET";
    req.requestTime = Date.now();
    console.log(req.method, req.path)
    next();
})

app.use('/dogs', (req, res, next) => {
    console.log("I Love Dogs!!");
    next();
})

const verifyPassword = (req, res, next) => {
    const { password } = req.query;
    if (password === 'hello') {
        next()
    }
    res.send("your password is not mached")
}

// app.use((req, res, next) => {
//     console.log('This is my first middleware!!');
//     next();
//     console.log('This is my first middleware-after calling next');//it will print at end of other console.log()
// })

// app.use((req, res, next) => {
//     console.log('This is my Second middleware!!');
//     return next();
//     console.log('This is my first middleware-after calling next'); //it will print not  at end of other console.log()
// })

app.get('/', (req, res) => {
    console.log(`request Date:${req.requestTime}`)
    res.send('Home Page!')
})

app.get('/dogs', (req, res) => {
    res.send('Bow Bow!!')
})
app.get('/secret', verifyPassword, (req, res) => {
    res.send('MY secret is .....')
})

app.use((req, res) => {
    res.status(404).send('not found')
})

app.listen(3000, () => {
    console.log('App is runing on localhost:3000')
})