var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ProductSchema = new Schema({
    name: {type: String, required: true, max: 100},
    price: {type: String}
});


// Export the model
module.exports = mongoose.model('Product', ProductSchema);