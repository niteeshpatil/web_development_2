const express = require("express");
const path = require('path');
const { v4: uuid } = require('uuid');

const methodOverride = require('method-override')


const app = express();
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(methodOverride('_method'))

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')


let comments = [
    {
        id: uuid(),
        username: '-niteesh',
        comment: 'happay birthday!'
    },
    {
        id: uuid(),
        username: '-sham',
        comment: 'tq'
    }

]

app.get('/comments/new', (req, res) => {
    res.render('comments/new.ejs');
})

app.post('/comments', (req, res) => {
    const { username, comment } = req.body;
    comments.push({ username, comment, id: uuid() })
    res.redirect('/comments')

})

app.get('/comments/:id', (req, res) => {
    const { id } = req.params;
    const comment = comments.find(c => c.id === id);
    res.render('comments/show.ejs', { comment })
})

app.get('/comments/:id/edit', (req, res) => {
    const { id } = req.params;
    const comment = comments.find(c => c.id === id);
    res.render('comments/edit.ejs', { comment })
})

app.delete('/comments/:id', (req, res) => {
    const { id } = req.params;
    comments = comments.filter(c => c.id !== id)
    res.redirect('/comments');
})
app.patch('/comments/:id', (req, res) => {
    const { id } = req.params;
    const newcommenttext = req.body.comment;
    const foundcomment = comments.find(c => c.id === id);
    foundcomment.comment = newcommenttext;
    res.redirect('/comments')
})

app.get('/comments', (req, res) => {
    res.render("comments/index.ejs", { comments })
})



app.get('/tacos', (req, res) => {
    res.send("GET/tacos response")
})

app.post('/tacos', (req, res) => {
    const { fruit, qty } = req.body;
    console.log(fruit)
    res.send(`OK,your ${qty}, ${fruit} are packed`);
})

app.listen(3000, () => {
    console.log("On port 3000!");
})

