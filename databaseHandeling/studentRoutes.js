const express = require('express');
const { createStudent, updateStudent, getStudents } = require('./studentController');

const router = express.Router();

router.post('/', createStudent);
router.put('/', updateStudent);
router.get('/', getStudents);

module.exports = router;