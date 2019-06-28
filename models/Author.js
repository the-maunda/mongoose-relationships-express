const mongoose = require('mongoose');
const Schema = mongoose.Schema();

const AuthorSchema = new Schema({
    firstName: { type: String, required: true, max: 100 },
    lastName: { type: String, requred: true, max: 100 },
    dob: { type: Date },
    dod: { type: Date },
});

// virtual  is basically the a getter form the database.
AuthorSchema.virtual('name').get( function   () {
    return `${this.firstName} ${this.lastName}`;
});

AuthorSchema.virtual('lifespan').get( function() {
    return (this.dod.getYear() - this.dob.getYear()).toString();
});

AuthorSchema.virtual('url').get(function() {
    return '/catalog/author/' + this._id;
 })

module.exports = mongoose.model("Author", AuthorSchema);