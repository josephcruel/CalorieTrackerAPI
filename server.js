const express = require('express')
const mongoose = require('mongoose')
const calorieRouter = require('./routes/calories')
const app = express()

mongoose.connect('mongodb+srv://josephcruel:UkwKD5LJ9yLIWp12@calories.ifsfwtg.mongodb.net/?retryWrites=true&w=majority')

app.set('view engine', 'ejs')

app.use('/calories', calorieRouter)

app.get('/', (req, res) => {
    const calories = [{
        name: 'Steak',
        createdAt: new Date(),
        calorie: '230',
        sodium: '12mg',
        protein: '24g'
    },
    {
        name: 'Bacon',
        createdAt: new Date(),
        calorie: '135',
        sodium: '15mg',
        protein: '14g'
    }]
    res.render('index', { calories: calories })
    res.render('calories/index', { calories: calories })
})

app.listen(5000)