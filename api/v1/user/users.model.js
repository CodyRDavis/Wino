const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

mongoose.set('useFindAndModify', false);

const User = mongoose.model('User', {
    admin: {Types: Number, default: 0},
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
