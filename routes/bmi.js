const express = require('express');
const bmiData = require('../data/bmiData');
const utils = require('./Utils');

const router = express.Router();

router.get('/bmi', (req, res) => {
    const bmiDataResponse = bmiData.persons.map((p) => {
        let heightM = p.HeightCm / 100;
        let bmiValue = Number((p.WeightKg / (heightM * heightM)).toFixed(1));
        return { ...p, bmi: bmiValue, ...utils.getBmiCategoryAndHealthRisk(bmiValue)};
    });
    res.send(bmiDataResponse);
});

module.exports = router;