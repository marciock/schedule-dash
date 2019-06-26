const express = require('express');
const router = express.Router();
const mongoose=require('mongoose');
const schedule=require('../models/schedule');


const newController=require('../controllers/schedulecontroller');

router.post('/',newController.update);


module.exports = router;

