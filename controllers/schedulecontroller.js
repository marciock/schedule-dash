const mongoose=require('mongoose');
const modelSchedule=require('../models/schedule');



module.exports={
    listAll: (req,res)=>{
        modelSchedule.find((err,data)=>{
            if(err){
                return res.status(500).json({
                    message:'Error getting data'
                });
            }
            return res.json(data);
        })
    },
    list: (req,res)=>{
        modelSchedule.find({'active':'true'})
        .then(results=>res.json(results))
        .catch(err=>res.send(err));
    },
    new: (req,res)=>{
        let newSchedule=new modelSchedule({
            title:req.body.title,
            dateactual:req.body.dateactual,
            dateend:req.body.dateend,
            priority:req.body.priority,
            description:req.body.description,
            active:req.body.active
        });
        newSchedule.save((err,data)=>{
            if(err){
                return res.status(500).json({
                    message:'Error saving data',
                    error:err
                });
            }
            return res.json({
                message:'saved',
                _id:data._id
            });
        });
    },
    search:(req,res)=>{
        let data=req.body.data;
        console.log(`search - ${data}`)
       
        modelSchedule.find({})
        .then(results=>res.json(results))
        .catch(err=>res.send(err));
    },
    searchActual:(req,res)=>{
        let start=req.body.start;
        let end=req.body.end;
        console.log(`search - ${data}`)
       
        modelSchedule.find({dateactual:{$gte:start,$lte:end}})
        .then(results=>res.json(results))
        .catch(err=>res.send(err));
    },
    show: (req,res)=>{
        let id=req.params.id
        modelSchedule.findOne({_id:id}, (err,data)=>{
            if(err){
                return res.status(500).json({
                    message:'Error getting data'
                });
            }
            if(!data){
                return res.status(404).json({
                    message:'NO such data'
                });
            }
            return res.json(data);
        })
    },
    update: (req,res)=>{
        let id=req.body.id;
        modelSchedule.findOne({_id:id}, (err,data)=>{
            if(err){
                return res.status(500).json({
                    message:'Error saving data',
                    error:err
                });
            }
            if(!data){
                return res.status(404).json({
                    message:'No such data'
                });
            }

            data.title=req.body.title ? req.body.title:data.title;
            data.dateactual=req.body.dateactual ? req.body.dateactual:data.dateactual;
            data.dateend=req.body.dateend ? req.body.dateend:data.dateend;
            data.priority=req.body.priority ? req.body.priority:data.priority;
            data.description=req.body.description ? req.body.description:data.description;
            data.active=req.body.active ? req.body.active:data.active;

            data.save((err,data)=>{
                if(err){
                    return res.status(500).json({
                        message:'Error getting data'
                    });
                }
                if(!data){
                    return res.status(404).json({
                        message:'No such data'
                    });
                }
                return res.json(data);
            })


        })
    },
    remove: (req,res)=>{
        let id=req.params.id;

        modelSchedule.findByIdAndRemove(id,(err,data)=>{
            if(err){
                return res.status(500).json({
                    message:'Error getting data'
                });
            }
            return res.json(data);
        })
    }


}