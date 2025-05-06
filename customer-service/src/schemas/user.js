const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    profile: {
        type: String,
        default: ""
    },
    parent: {
        type: String,
        default: null
    },
    mobile: {
        type: String,
        require: true
    },
    gmail: {
        type: String,
        require: true
    },
    type: {
        type: String,
        require: true
    },
    status: {
        type: Boolean,
        default: true
    },
    password: {
        type: String,
        require: true
    }
},
    {
        timestamps: true // Automatically adds createdAt and updatedAt
    });

const UserModal = mongoose.model('users', userSchema);
module.exports = { UserModal }
