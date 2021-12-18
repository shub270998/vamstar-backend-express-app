const bmiData = require('../data/bmiData');


const getBmiCategoryAndHealthRisk = (bmiValue) => {
    const ranges = Object.keys(bmiData.map);
    let i=0; let j = ranges.length;let ans = null;

    while (i<=j) {
        let mid = (i+j) / 2;
        if (ranges[mid] >= bmiValue) {
            j = mid - 1;
        } else {
            ans = mid;
            i = mid + 1;
        }
    }
    return bmiData.map[ranges[ans]];
};

module.exports = {
    getBmiCategoryAndHealthRisk,
};