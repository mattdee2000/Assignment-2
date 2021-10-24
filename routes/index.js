// index.js
// Matthew Delamasa
// 301160223
// 2021-10-02

var express = require('express');
var router = express.Router();
let controler = require('../controller/index');

/* GET home page. */
router.get('/', controler.home)

/* GET about page. */
router.get('/about', controler.about)

/* GET Projects page. */
router.get('/projects', controler.projects)

/* GET Services page. */
router.get('/services', controler.services)

/* GET Contact page. */
router.get('/contact', controler.contact)


module.exports = router;