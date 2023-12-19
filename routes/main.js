const express = require('express');
const route = express.Router();

route.get('/', (req, res) => {
    res.render('home', { grade: undefined });
});

route.post('/', (req, res) => {
    const mark = req.body.mark;
    let error = [];
    let grade;

    if (mark < 0) {
        error.push({ Error: 'Marks should be greater than 0' });
    } else if (mark > 100) {
        error.push({ Error: 'Marks should be less than 100' });
    } else {
        if (mark <= 100 && mark > 70) {
            grade = 'A';
        } else if (mark <= 70 && mark > 60) {
            grade = 'B';
        } else if (mark <= 60 && mark > 40) {
            grade = 'C';
        } else if (mark <= 40 && mark > 20) {
            grade = 'D';
        } else if (mark <= 20 && mark >= 0) {
            grade = 'E';
        }
    }

    res.render('home', { mark, grade, error });
});

module.exports = route;
