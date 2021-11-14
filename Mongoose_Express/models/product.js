const mongoose = require('mongoose');


const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        min: 0,
        required: true
    },
    category: {
        type: String,
        lowercase: true
    }
})

const Product = mongoose.model('Product', ProductSchema);

module.exports = Product;