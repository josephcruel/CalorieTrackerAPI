const express = require('express');
const Calorie = require('./../models/calorie');
const router = express.Router();

router.get('/new', (req, res) => {
    res.render('calories/new', { calorie: new Calorie() });
});

router.get('/:id', async (req, res) => {
    try {
        const calorie = await Calorie.findById(req.params.id);
        if (!calorie) {
            res.status(404).send('Calorie not found');
            return;
        }
        res.render('calories/show', { calorie });
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});

router.post('/', async (req, res) => {
    const { name, calorie, sodium, protein } = req.body;
    try {
        const newCalorie = new Calorie({ name, calorie, sodium, protein });
        const savedCalorie = await newCalorie.save();
        res.redirect(`/calories/${savedCalorie.id}`);
    } catch (error) {
        console.error(error);
        res.render('calories/new', { calorie: req.body, error: 'Failed to create calorie entry' });
    }
});

module.exports = router;
