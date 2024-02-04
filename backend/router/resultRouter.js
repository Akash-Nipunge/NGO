const express = require('express');
const { searchStudents, getStudentById, SubmitResult } = require('../controller/resultController');


const router = express.Router();

router.get('/search',searchStudents);
router.get('/get',getStudentById);
router.post('/submit',SubmitResult);

module.exports =router;