const mongoose = require('mongoose')

const bookSchema = new mongoose.Schema({
    title: String, // Same as title:{type:String}
    author: {
        type: String,
        required: true,
        lowercase: true
    },
    price: Number,
    published_date: Date
})

module.exports = mongoose.model("book", bookSchema)