const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.send('Calories')
})

router.get('/new', (req, res) => {
    res.render('calories/new')
})

router.post('/', (req, res) => {

})

module.exports = router