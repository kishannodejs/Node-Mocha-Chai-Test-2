const expect = require('expect');
const request = require('supertest');
//const {ObjectID} = require('mongodb');
let mongoose = require('mongoose');
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





describe('Get /products/getall', () => {

  //let query = Product.find({});

//console.log(query);
  it('should get all products', (done) => {
    request(app)
      .get('/products/getall')
      //.set('x-auth', users[0].tokens[0].token)
      .expect(200)
      .expect((res) => {
        console.log(res.body.products);
     // expect(res.body.products.length).toBe(15)
      })
      .end(done);
  })
});

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


describe('GET /products/:id', () => {
  //console.log(`PPPPPPPPP/products/${products[0]._id.toHexString()}PPPPPPPPPPPP`);
  it('should return products doc by id', (done) => {
    request(app)
      .get(`/products/62c16f9219ec7e29d121378f`)
     // .set('x-auth', users[0].tokens[0].token)
      .expect(200)
      .expect((res) => {
        //expect(res.body.todo.text).toBe(todos[0].text);
      })
      .end(done);
  });

});


describe('/GET/:id products', () => {
  it('it should GET a book by the given id', (done) => {
      let product = new Product({ name: "The Lord of the Rings", price: 1170 });
      product.save((err, product) => {
          chai.request(server)
        .get('/products/' + product.id)
        .send(product)
        .end((err, res) => {
              res.should.have.status(200);
              res.body.should.be.a('object');
              res.body.should.have.property('title');
              res.body.should.have.property('author');
              res.body.should.have.property('pages');
              res.body.should.have.property('year');
              res.body.should.have.property('_id').eql(product.id);
          done();
        });
      });

  });
});

///https://www.digitalocean.com/community/tutorials/test-a-node-restful-api-with-mocha-and-chai