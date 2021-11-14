const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/shopApp', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("connection open");
    })
    .catch(err => {
        console.log("Oh on error");
        console.log(err);
    })

const personSchema = new mongoose.Schema({
    first: String,
    last: String
})

personSchema.virtual('fullName').get(function () {
    return `${this.first} ${this.last}`
})

personSchema.pre('save', async function () {
    console.log("About to save!!");
    this.first = "ram";
    this.last = "s";
})

personSchema.post('save', async function () {
    console.log("Just Saved!!")
})

const Person = mongoose.model('Person', personSchema);

