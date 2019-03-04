const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const ItemSchema = new Schema({
    name: {
        type:String,
        required: true
    },
    author: {
        type:String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type:Number,
        required: true
    },
    img: { 
        data: Buffer, 
        contentType: String
    },
    genre: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: false
    },
    key: {
        type: String,
        required: false
    }
})

module.exports = Item = mongoose.model('item', ItemSchema);

//need to add image here too!!!