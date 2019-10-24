const express = require('express');
const router = express.Router();
const Student = require('../models/students');

router.get('/students', function (req, res) {
    Student.find(function (err, students) {
        if(err) {
            res.send(err)
        }
        res.json(students)
    });
});

router.post('/students', function (req, res) {
   let student = Student();
   student.id = req.body.id;
   student.firstName = req.body.firstName;
   student.lastName = req.body.lastName;
   student.age = req.body.age;
   student.nationality = req.body.nationality;
   student.save(function (err, student) {
       if(err) {
           res.send(err)
       }
       res.json(student)
    });
});

module.exports = router;