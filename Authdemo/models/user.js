const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, 'Username cannot be blank']
    },
    password: {
        type: String,
        required: [true, 'Password cannot be blank']
    }
})

userSchema.pre('save', async function (next) {
    this.password = await bcrypt.hash(this.password, 12);
    next();
})

userSchema.statics.findAndValidate = async function (username, password) {
    const isuser = await this.findOne({ username });
    const isvalid = await bcrypt.compare(password, isuser.password);
    return isvalid ? isuser : false;
}

module.exports = mongoose.model('User', userSchema);