const mongoose = require('mongoose')
const validator = require('validator')

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        validator(value) {
            if (!validator.isEmail(value)) {
                throw new Error('Must use a valid eamil')
            }
        }
    },
    password: {
        type: String,
        required: true,
        trim: true,
        minlength: 7
    }
}, {
        timestamps: true
    }
)

const User = mongoose.model('User', userSchema)

module.exports = User