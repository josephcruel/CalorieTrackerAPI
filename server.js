const express = require('express')
const calorieRouter = require('./routes/calories')
const app = express()

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
})

app.listen(5000)