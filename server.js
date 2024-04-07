const express = require('express')
const mongoose = require('mongoose')
const Calorie = require('./models/calorie')
const calorieRouter = require('./routes/calories')
const app = express()

mongoose.connect('mongodb+srv://josephcruel:UkwKD5LJ9yLIWp12@calories.ifsfwtg.mongodb.net/?retryWrites=true&w=majority&appName=Calories')

app.set('view engine', 'ejs')

app.use(express.urlencoded({ extended: false }))

app.get('/', async (req, res) => {
    const calories = await Calorie.find().sort({
        createdAt: 'desc'})
    res.render('calories/index', { calories: calories })
})

app.use('/calories', calorieRouter)

app.listen(5000)