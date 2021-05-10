var express = require('express');
var router = express.Router();


function m1(req,res,next){
  console.log("running m1")
  next();
}
function m2(req,res,next){
  console.log("running m2")
  next();
}
function m3(req,res,next){
  console.log("running m3")
  next();
}







/* GET home page. */
router.get('/',[m1,m2,m3],function(req, res, next) {
  
res.render('call.ejs');
  
});

module.exports = router;
