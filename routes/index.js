const express = require('express');
const router = express.Router();



  //return data;
  router.get('/', function(req, res, next) {
 
    res.render('layouts/home');
  });



/* GET home page. */


module.exports = router;
