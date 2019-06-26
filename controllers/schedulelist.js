const mongoose=require('mongoose');
const modelSchedule=require('../models/schedule');

let listController={};

listController.list=(req,res)=>{
    modelSchedule.find()
    .then(results=>res.json(results))
    .catch(err=>res.send(err));
}

modelSchedule.exports=listController;

