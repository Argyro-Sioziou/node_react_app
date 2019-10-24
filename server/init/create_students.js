const Student = require('../models/students');
const mongoose = require('mongoose');
var config = require('../config');

const students = [
    {
      id: 1,
      firstName: 'John',
      lastName: 'Doe',
      age: 24,
      nationality: 'English',
   },
   {
      id: 2,
      firstName: 'Jan',
      lastName: 'Dewaele',
      age: 27,
      nationality: 'Belgian',
   },
   {
      id: 3,
      firstName: 'Jonathan',
      lastName: 'Van Driessen',
      age: 33,
      nationality: 'Belgian',
   },
   {
      id: 4,
      firstName: 'Anthony',
      lastName: 'Lamot',
      age: 30,
      nationality: 'Belgian',
   },
   {
      id: 5,
      firstName: 'Tim',
      lastName: 'Ferris',
      age: 36,
      nationality: 'American',
   },
   {
      id: 6,
      firstName: 'Melinda',
      lastName: 'Gates',
      age: 63,
      nationality: 'American',
   },
   {
      id: 7,
      firstName: 'Jan',
      lastName: 'De Hollandese',
      age: 13,
      nationality: 'Dutch',
   },
   {
      id: 8,
      firstName: 'Maarten',
      lastName: 'De Vriendt',
      age: 47,
      nationality: 'Dutch',
   },
   {
      id: 9,
      firstName: 'Furkan',
      lastName: 'Kursun',
      age: 23,
      nationality: 'Turkish',
   }
];

mongoose.connect(config.database, { useUnifiedTopology: true, useNewUrlParser: true });

Student.insertMany(students, function (err, students) {
   if (err){
      return console.log(err)
   }
   console.log('Inserted, press CTRL+C to escape.')
});