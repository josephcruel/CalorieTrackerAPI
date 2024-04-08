const mongoose = require('mongoose')
const slugify = require('slugify')

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
    },
    slug: {
        type: String,
        required: true,
        unique: true
    }
})

calorieSchema.pre('validate', function(next) {
    if (this.title) {
        this.slug = slugify(this.title, { lower: true, strict: true })
    }
    next()
})

module.exports = mongoose.model('Calorie', calorieSchema)