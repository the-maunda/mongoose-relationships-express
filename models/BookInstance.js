const mongoose = require('mongoose');
const Schema = mongoose.Schema();

const BookInstanceSchema = new Schema({
	book: { type: Schema.Types.ObjectId, requred: true, ref: 'Book', },
	imprint: { required: true, type:String, },
	status: { type: String, enum: ['Available', 'Maintainance', 'Loaned', 'Reserved'], default: '' },
	due: { type: Date, default: Date.now }
});


module.exports = mongoose.model("BookInstance", BookInstanceSchema);