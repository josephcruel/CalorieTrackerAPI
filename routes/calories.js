const express = require('express');
const slugify = require('slugify');
const Calorie = require('./../models/calorie');
const router = express.Router();

router.get('/new', (req, res) => {
    res.render('calories/new', { calorie: new Calorie() });
});

router.get('/:slug', async (req, res) => {
    try {
        const calorie = await Calorie.findOne({ slug: req.params.slug });
        if (!calorie) {
            res.redirect('/');
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
        const slug = slugify(name, { lower: true }); 
        const newCalorie = new Calorie({ 
            name, 
            calorie, 
            sodium, 
            protein, 
            slug 
        });
        const savedCalorie = await newCalorie.save();
        res.redirect(`/calories/${savedCalorie.slug}`); 
    } catch (error) {
        console.error(error);
        res.render('calories/new', { calorie: req.body, error: 'Failed to create calorie entry' });
    }
});

module.exports = router;
