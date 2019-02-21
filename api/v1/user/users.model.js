const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const User = mongoose.model('User', {
    firstName: String,
    lastName: String,
    email: String,
    password: String,
    //drinks: [{type: mongoose.Schema.Types.ObjectId, ref: 'Drink'}]    

    createdOn: Date,
    lastUpdate: Date
});

/*
User.prototype.validPassword = function(password){
    return bcrypt.compareSync(password, this.password);
}
*/

module.exports = User;