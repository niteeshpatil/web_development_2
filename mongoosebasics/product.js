// const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost:27017/shopApp', { useNewUrlParser: true, useUnifiedTopology: true })
//     .then(() => {
//         console.log("connection open");
//     })
//     .catch(err => {
//         console.log("Oh on error");
//         console.log(err);
//     })

// const productSchema = new mongoose.Schema({
//     // name:String,
//     // price:Number,
//     // isonSale:Boolean

//     name:
//     {
//         type: String,
//         required: true,
//         maxLength: 20
//     },
//     price:
//     {
//         type: Number,
//         min: 0
//     },
//     onSale: {
//         type: Boolean,
//         default: false
//     },
//     categories: [String],//saying it is an arry conssist if strings
//     qty: {
//         online: {
//             type: Number,
//             default: 0
//         },
//         inStore: {
//             type: Number,
//             default: 0
//         }
//     },
//     size: {
//         type: String,
//         enum: ['s', 'm', 'l']
//     }
// });

// // productSchema.methods.greet = function () {
// //     console.log("Hello!! Hi HOWDY!!");
// // }

// productSchema.methods.toggleOnSale = function () {
//     this.onSale = !this.onSale;
//     this.save();

// }

// productSchema.statics.fireSale = function () {
//     return this.updateMany({}, { onSale: true, price: 0 })
// }

// productSchema.methods.addCategory = function (newCat) {
//     this.categories.push(newCat);
//     this.save();
// }

// const Product = mongoose.model('Product', productSchema);

// const findProduct = async () => {
//     const foundProduct = await Product.findOne({ name: 'bike honda' });
//     console.log(foundProduct);
//     await foundProduct.toggleOnSale();
//     console.log(foundProduct);
//     await foundProduct.addCategory('outdoors');
//     console.log(foundProduct);

//     // foundProduct.onSale = !foundProduct.onSale
//     // foundProduct.save();
// }
// // findProduct();
// Product.fireSale().then(res => {
//     console.log(res)
// })





// // const bike = new Product({ name: 'hero Bike', price: 50000, categories: ["wear helmet", "speed limit is 80", "not use mobile"] })
// // bike.save()
// // Product.findOneAndUpdate({ name: "hero bike" }, { price: 100 }, { new: true, runValidators: true })
// //     .then(data => {
// //         console.log("it worked");
// //         console.log(data);
// //     })
// //     .catch(err => {
// //         console.log("oh no error");
// //         console.log(err);
// //     })

// // const bike = new Product({ name: 'bike honda', price: 70000, categories: ["csual bike"], size: 's' })
// // bike.save()
// //     .then(data => {
// //         console.log("it worked");
// //         console.log(data);
// //     })
// //     .catch(err => {
// //         console.log("oh no error");
// //         console.log(err);
// //     })