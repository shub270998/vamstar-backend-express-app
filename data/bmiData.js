const persons = [{"Gender": "Male", "HeightCm": 171, "WeightKg": 96 }, {"Gender": "Male", "HeightCm": 161,
"WeightKg":85 }, { "Gender": "Male", "HeightCm": 180, "WeightKg": 77 }, { "Gender": "Female",
"HeightCm": 166,"WeightKg": 62}, {"Gender": "Female", "HeightCm": 150, "WeightKg": 70},
{"Gender": "Female","HeightCm": 167, "WeightKg": 82}];

const map = {
  0: { bmiCategory: 'UnderWeight', healthRisk: 'Malnutrition risk'},
  18.5: { bmiCategory: 'Normal Weight', healthRisk: 'Low risk' },
  25: {  bmiCategory: 'Overweight', healthRisk: 'Enhanced risk' },
  30: { bmiCategory: 'Moderately obese', healthRisk: 'Medium risk' },
  35: { bmiCategory: 'Several obese', healthRisk: 'High' },
  40: { bmiCategory: 'Very Severaly obese', healthRisk: 'Very High risk' },
};



module.exports = {
    persons, map
};