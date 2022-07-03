const {ObjectID} = require('mongodb');



const {Product} = require('./../models/product');


const products = [{
  name: "Anish",
  price: 888888888
}, {
  name: "Anvi",
  price: 999999999
}]

var addDummyProductItems = (done) => {
  Product.deleteMany({}).then(() => {
    return Product.insertMany(products);
  }).then(() => done());
};

module.exports = {
  products,
  addDummyProductItems
}
