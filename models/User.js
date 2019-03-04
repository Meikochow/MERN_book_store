const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const UserSchema = new Schema({
    cart: {
        type: Array,
        required: false
    }
})

module.exports = User = mongoose.model('user', UserSchema);
/*
*/