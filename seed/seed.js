const {ObjectID} = require('mongodb');



const {User} = require('./../models/product');

const userOneID = new ObjectID();
const userTwoID = new ObjectID();
const users = [{
  name: "person1@gmail.com",
  price: "12345678"
}, {
  name: "person2@gmail.com",
  price: "12345678"
}]

var addDummyUsers = (done) => {
return 10;
};

module.exports = {
  users,
  addDummyUsers
}
