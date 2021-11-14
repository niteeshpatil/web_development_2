const express = require("express");
const app = express();
// console.dir(app);

// app.use((req, res) => {
//     console.log("WE got a new request")
//     // console.dir(req)
//     // res.send("hello ,we got ur request!pleas wait until we send ur info")
//     // res.send({ color: 'red' })
//     res.send('<h1>This is my webpage!</h1>')

// })

app.get('/cat', (req, res) => {
    console.log("WE got a new request for cat")
    res.send('meow')
})

app.get('/r/:subreddit', (req, res) => {
    const { subreddit } = (req.params);
    res.send(`<h1>Browsing the ${subreddit} subreddit`)
})

app.get('/r/:subreddit/:postId', (req, res) => {
    const { subreddit, postId } = (req.params);
    res.send(`<h1>Browsing the ${postId} in ${subreddit} subreddit`)
})

app.get('/dog', (req, res) => {
    console.log("WE got a new request for dog")
    res.send('bow')
})
app.get('/', (req, res) => {
    console.log("WE got a new request for home")
    res.send('homepage')
})

app.post('/cat', (req, res) => {
    console.log("we got request for post for cat")
    res.send('post request to /cat!!this is diffrent then get')
})


app.listen(3000, () => {
    console.log("listing on port 3000!!")
})

app.get('/search', (req, res) => {
    const { q } = req.query;
    if (!q) {
        res.send("nothinf found if nothing is searched")
    }
    else {
        console.log(req.query);
        // res.send('hi');
        res.send(`<h1>Saerching for: ${q}</h1>`)
    }
})



app.get('*', (req, res) => {

    res.send('I dont know that path!')
})

