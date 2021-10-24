// users.js
// Matthew Delamasa
// 301160223
// 2021-10-02

var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('users', { 
    title: 'Users', 
    userName: 'Matt'
  });
});

router.get('/john', function(req, res, next) {  
  res.render('users', { 
    title: 'Users',
    userName: 'John'
  });
});

module.exports = router;
