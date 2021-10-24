let mongoose = require('mongoose');

// Creating model class

let contactsModel = mongoose.Schema(
    {
        contactName: String,
        contactNumber: Number,
        emailAddress: String
    },
    {
        collection: "contacts"
    }
);

module.exports = mongoose.model('Contacts', contactsModel)