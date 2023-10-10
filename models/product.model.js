var mongoose = require('mongoose');

var ProductSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: Number,
  quantity: Number,
  category: String
});

module.exports = mongoose.model('product', ProductSchema)


// Duplicate the ID field.
// ProductSchema.virtual('id').get(function(){
//   return this._id.toHexString();
// });

// // Ensure virtual fields are serialised.
// ProductSchema.set('toJSON', {
//   virtuals: true
// });
