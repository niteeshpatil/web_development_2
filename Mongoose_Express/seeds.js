const mongoose = require('mongoose');
const Product = require('./models/product');


mongoose.connect('mongodb://localhost:27017/farmStand', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("connection open");
    })
    .catch(err => {
        console.log("Oh on error");
        console.log(err);
    })


// const p = new Product({
//     name: "mango",
//     price: 90,
//     category: 'fruit'
// })

// p.save().then(res => console.log(res))
//     .catch(e => console.log(e))


const seedProducts = [
    {
        name: 'Orange',
        price: 40,
        category: 'fruit'
    },
    {
        name: 'graps',
        price: 30,
        category: 'fruit'
    },
    {
        name: 'apple',
        price: 80,
        category: 'fruit'
    }
]

Product.insertMany(seedProducts)
    .then(res => {
        console.log(res)
    })
    .catch(e => {
        console.log(e)
    })