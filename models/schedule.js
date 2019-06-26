const mongoose = require('mongoose');
const Schema = mongoose.Schema;


let scheduleSchema=new mongoose.Schema({
    title:{type:String},
    dateactual:{type:Date},
    dateend:{type:Date},
    priority:{type:String},
    description:{type:String},
    active:{type:Boolean}

})

module.exports = mongoose.model('Schedule', scheduleSchema);