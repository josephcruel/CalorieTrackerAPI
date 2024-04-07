const mongoose = require('mongoose')

const calorieSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    calorie: {
        type: String,
        required: true
    },
    sodium: {
        type: String,
        required: true
    },
    protein: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Calorie', calorieSchema)