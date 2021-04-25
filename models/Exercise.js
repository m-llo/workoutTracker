const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ExerciseSchema = new Schema({
    name: {
        type: String,
    },
    type: {
        type: String,
    },
    weight: {
        type: Number,
    },
    sets: {
        type: Number,
    },
    reps: {
        type: Number,
    },
    duration: {
        type: Number,
    },
    distance: {
        type: Number,
    }



});

const Book = mongoose.model("Book", BookSchema);

module.exports = Book;