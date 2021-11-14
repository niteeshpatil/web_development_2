
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/farmStand2', { useNewUrlParser: true, useUnifiedTopology: true })
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
const AppError = require('./AppError');


const Product = require('./models/product');

app.set('views', path.join(__dirname, 'views'));
app.set('view engin', 'ejs')
app.use(express.urlencoded({ extended: true }))
app.use(methodOverride('_method'))
//get post request back and parsing it

const cateogries = ['fruit', 'vegetable', 'dairy'];

function wrapAsync(fn) {
    return function (req, res, next) {
        fn(req, res, next).catch(e => next(e))
    }
}

app.get('/products', wrapAsync(async (req, res, next) => {
    try {
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
    }
    catch (e) {
        next(e);
    }
}))

app.get('/products/new', (req, res, next) => {
    // throw new AppError('NOT ALLOWED', 401)
    res.render('products/new.ejs', { cateogries })
})

app.post('/products', wrapAsync(async (req, res, next) => {

    const newProduct = new Product(req.body);
    await newProduct.save();
    console.log(newProduct)
    res.redirect('/products')

}))

app.get('/products/:id', async (req, res, next) => {
    try {
        const { id } = req.params;
        const product = await Product.findById(id);
        if (!product) {
            throw new AppError('No product fount', 404);
        }
        res.render('products/show.ejs', { product })
    }
    catch (e) {
        next(e);
    }
})

app.get('/products/:id/edit', wrapAsync(async (req, res, next) => {
    const { id } = req.params;
    const product = await Product.findById(id);
    if (!product) {
        throw new AppError('No product fount', 404);
    }
    res.render('products/edit.ejs', { product, cateogries })
}))

app.put('/products/:id', wrapAsync(async (req, res, next) => {
    const { id } = req.params;
    const product = await Product.findByIdAndUpdate(id, req.body, { runValidators: true, new: true })
    // const product = await Product.findById(id);
    // console.log(req.body);
    res.redirect(`/products/${product._id}`);

}))

app.delete('/products/:id', wrapAsync(async (req, res, next) => {
    const { id } = req.params;
    await Product.findByIdAndDelete(id);
    res.redirect('/products');

}))
const handleValidationErr = err => {
    console.dir(err);
    return new AppError(`Validation Failed....${err.message}`, 400)
}

app.use((err, req, res, next) => {
    console.log(err.name);
    if (err.name === 'ValidationError') err = handleValidationErr(err);
    next(err);
})

app.use((err, req, res, next) => {
    const { status = 500, message = 'Something broke' } = err;
    res.status(status).send(message)
})

app.listen(3000, () => {
    console.log("app is listeing on port 3000")
})




