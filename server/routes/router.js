const express = require('express');
const router = express.Router();

const students_router = require('./students-router');

router.use(students_router);

module.exports = router;