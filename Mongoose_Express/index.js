
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/farmStand', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("connection open");
    })
    .catch(err => {
        console.log("Oh on error");
        console.log(err);
    })

const express = require('express');
const app = express();
const path = require('path');
const methodOverride = require('method-override');

const Product = require('./models/product');

app.set('views', path.join(__dirname, 'views'));
app.set('view engin', 'ejs')
app.use(express.urlencoded({ extended: true }))
app.use(methodOverride('_method'))
//get post request back and parsing it

const cateogries = ['fruit', 'vegetable', 'dairy'];

app.get('/products', async (req, res) => {
    const { category } = req.query;
    if (category) {
        const products = await Product.find({ category })
        console.log(products)
        res.render('products/index.ejs', { products, category })
    }
    else {
        const products = await Product.find({})
        res.render('products/index.ejs', { products, category: 'All' })
    }
})

app.get('/products/new', async (req, res) => {
    res.render('products/new.ejs', { cateogries })
})

app.post('/products', async (req, res) => {
    const newProduct = new Product(req.body);
    await newProduct.save();
    console.log(newProduct)
    res.redirect('/products')
})

app.get('/products/:id', async (req, res) => {
    const { id } = req.params;
    const product = await Product.findById(id);
    console.log(product);
    res.render('products/show.ejs', { product })
})

app.get('/products/:id/edit', async (req, res) => {
    const { id } = req.params;
    const product = await Product.findById(id);
    res.render('products/edit.ejs', { product, cateogries })
})

app.put('/products/:id', async (req, res) => {
    const { id } = req.params;
    const product = await Product.findByIdAndUpdate(id, req.body, { runValidators: true, new: true })
    // const product = await Product.findById(id);
    // console.log(req.body);
    res.redirect(`/products/${product._id}`);
})

app.delete('/products/:id', async (req, res) => {
    const { id } = req.params;
    await Product.findByIdAndDelete(id);
    res.redirect('/products');
})

app.listen(3000, () => {
    console.log("app is listeing on port 3000")
})




