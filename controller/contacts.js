//Connect to model
let Contacts = require('../models/contacts');

exports.list = function(req, res, next) {
    Contacts.find((err, contactsList) => {
        console.log(contactsList)
        if(err){
            return console.error(err);
        }
        else
        {
            res.render('contactsList', {
                title: 'Contacts List', 
            ContactsList: contactsList})            
        }
    })
  }

  module.exports.displayEditPage = (req, res, next) => {
    let id = req.params.id;

    Contacts.findById(id, (err, itemToEdit) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            //show the edit view
            // console.log(itemToEdit);
            res.render('add_edit', {
                title: 'Edit Item', 
                item: itemToEdit
            })
        }
    });
}


module.exports.processEditPage = (req, res, next) => {
    let id = req.params.id

    // console.log(req.body);

    let updatedItem = Contacts({
        _id: req.body.id,
        contactName: req.body.contactName,
        contactNumber: req.body.contactNumber,
        emailAddress: req.body.emailAddress
    });

    // console.log(updatedItem);

    Contacts.updateOne({_id: id}, updatedItem, (err) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            // console.log(req.body);
            // refresh the book list
            res.redirect('/contacts/list');
        }
    });
}


module.exports.displayAddPage = (req, res, next) => {
    let newItem = Contacts();

    res.render('add_edit', {
        title: 'Add a new Item',
        item: newItem
    })          
}


module.exports.processAddPage = (req, res, next) => {
    
    let newItem = Contacts({
        _id: req.body.id,
        contactName: req.body.contactName,
        contactNumber: req.body.contactNumber,
        emailAddress: req.body.emailAddress,
    });

    Contacts.create(newItem, (err, item) =>{
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            // refresh the book list
            console.log(item);
            res.redirect('/contacts/list');
        }
    });

}


module.exports.performDelete = (req, res, next) => {
    let id = req.params.id;

    Contacts.remove({_id: id}, (err) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            // refresh the book list
            res.redirect('/contacts/list');
        }
    });
}