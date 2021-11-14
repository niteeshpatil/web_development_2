// const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost:27017/movieApp', { useNewUrlParser: true, useUnifiedTopology: true })
//     .then(() => {
//         console.log("connection open");
//     })
//     .catch(err => {
//         console.log("Oh on error");
//         console.log(err);
//     })

// const movieSchema = new mongoose.Schema({
//     title: String,
//     year: Number,
//     rating: Number
// });

// const Movie = mongoose.model('Movie', movieSchema);//gives class and name is sigular and Capitalfist letter
// // const robot = new Movie({ title: "Robot", year: 2015, rating: 8.8 });

// Movie.insertMany([{ title: "amelie", year: 2001, rating: 8.3 },
// { title: "alien", year: 1990, rating: 8.1 },
// { title: "The Iron Giant", Year: 2003, rating: 7.8 },
// { title: "stand by me", year: 2007, rating: 8.4 }
// ])
//     .then(data => {
//         console.log("it worked!");
//         console.log(data);
//     })