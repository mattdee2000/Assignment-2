var express = require('express');
var router = express.Router();
let mongoose = require('mongoose')
contactsController = require('../controller/contacts')

//Read
router.get('/list', contactsController.list)

// Update
router.get('/edit/:id', contactsController.displayEditPage);
router.post('/edit/:id', contactsController.processEditPage);

// Delete 
router.get('/delete/:id', contactsController.performDelete);

// Create 
router.get('/add', contactsController.displayAddPage);
router.post('/add', contactsController.processAddPage);

module.exports = router;