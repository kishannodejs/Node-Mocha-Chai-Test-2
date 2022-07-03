const expect = require('expect');
const request = require('supertest');
const {ObjectID} = require('mongodb');
let chai = require("chai");
let chaiHttp = require("chai-http");
var should = chai.should();
chai.use(chaiHttp);
let app = require("./app");

const {Product} = require('./models/product');
//Our parent block
 
// const {products, addDummyProductItems} = require('./seed/seed')
// beforeEach(addDummyProductItems);


// describe("Podcast", () => {
//      describe("/POST products/create", () => {
//       it("it should GET a message", (done) => {
//          var text = 'Testing todo route';
//       chai.request(app)
//           .post("/products/create")
//           .send({ name: "Kishan Kumar Prajapati", price: 99999999999999 })
//           .end((err, res) => {       
//             (res).should.have.status(200);
//            // console.log(res)
//         //   expect(response.status).to.eql(200);
//                 done();
//              });
//           });
//       });
// });



describe('POST /products/create', () => {
   it('should create a new product', (done) => {
     var text = 'Testing todo route';
 
     request(app)
       .post('/products/create')
       // .set('x-auth', users[0].tokens[0].token)
       .send({ name: "Anish Kumar Prajapati", price: 9999999999999 })
       .expect(200)
       .expect((res) => {
         console.log(res.status);
         (res).should.have.status(200);
       })
       .end((err, res) => {
         if(err) return done(err);
 
         done();
       });
   });
 
   // it('should not create product with invaild nody data', (done) => {
   //   request(app)
   //     .post('/products/create')
   //   //  .set('x-auth', users[0].tokens[0].token)
   //    //  .send({})
   //    .send({ name: "Anvi Kumar Prajapati", price: 888888888888888 })
   //     .expect(200)
   //     .end((err, res) => {
   //       if(err) return done(err);
 
   //       Product.find().then((products) => {
   //        // expect(todos.length).toBe(2);
   //        console.log(products.length);
   //         done();
   //       }).catch((err) => {
   //         done(err);
   //       })
   //     })
   // });
});