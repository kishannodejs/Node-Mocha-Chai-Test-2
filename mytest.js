process.env.NODE_ENV = 'test';

let mongoose = require("mongoose");
let Product = require('./models/product');

let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('./app');
let should = chai.should();


chai.use(chaiHttp);

describe('Products', () => {
    beforeEach((done) => {
      Product.remove({}, (err) => { 
           done();           
        });        
    });
  describe('/GET products/getall', () => {
      it('it should GET all the products', (done) => {
            chai.request(server)
            .get('/products/getall')
            .end((err, res) => {
                  res.should.have.status(200);
                //  res.body.should.be.a('array');
                 // res.body.length.should.be.eql(0);
              done();
            });
      });
  });
   describe('/POST products/create', () => {
  //     it('it should not POST a book without pages field', (done) => {
  //         let book = {
  //             title: "The Lord of the Rings",
  //             author: "J.R.R. Tolkien",
  //             year: 1954
  //         }
  //           chai.request(server)
  //           .post('/products/create')
  //           .send(book)
  //           .end((err, res) => {
  //                 res.should.have.status(200);
  //                 res.body.should.be.a('object');
  //                 res.body.should.have.property('errors');
  //                 res.body.errors.should.have.property('pages');
  //                 res.body.errors.pages.should.have.property('kind').eql('required');
  //             done();
  //           });
  //     });
      it('it should POST a products ', (done) => {
          let product = {
              name: "The Lord of the Rings",
              price: 1170
          }
            chai.request(server)
            .post('/products/create')
            .send(product)
            .end((err, res) => {
                  res.should.have.status(200);
                  res.body.should.be.a('object');
                  res.body.should.have.property('message').eql('Product successfully added!');
                  res.body.product.should.have.property('name');
                  res.body.product.should.have.property('price');
              done();
            });
      });
  });
  describe('/GET/:id products', () => {
      it('it should GET a products by the given id', (done) => {
          let product = new Product({ name: "The Lord of the Rings", price: 1170 });
          product.save((err, product) => {
              chai.request(server)
            .get('/products/' + product.id)
            .send(product)
            .end((err, res) => {
                  res.should.have.status(200);
                  res.body.should.be.a('object');
                //  res.body.should.have.property('name');
               //   res.body.should.have.property('price');
               //   res.body.should.have.property('_id').eql(product.id);
              done();
            });
          });

      });
  });
  describe('/PUT/:id products', () => {
      it('it should UPDATE a product given the id', (done) => {
          let product = new Product({name: "TTTTTTTTTTTTTTT", price: 111})
          product.save((err, product) => {
                chai.request(server)
                .put('/products/' + product.id)
                .send({title: "PPPPPPPPPPPPP", price: 222})
                .end((err, res) => {
                      res.should.have.status(200);
                      res.body.should.be.a('object');
                    //  res.body.should.have.property('message').eql('Product updated!');
                   //   res.body.product.should.have.property('price').eql(222);
                  done();
                });
          });
      });
  });
//  /*
//   * Test the /DELETE/:id route
//   */
  describe('/DELETE/:id products', () => {
      it('it should DELETE a product given the id', (done) => {
          let product = new Product({name: "The Chronicles of Narnia", price: 778})
          product.save((err, product) => {
                chai.request(server)
                .delete('/products/' + product.id)
                .end((err, res) => {
                      res.should.have.status(200);
                      res.body.should.be.a('object');
                      res.body.should.have.property('message').eql('Product successfully deleted!');
                    //  res.body.should.have.property('message').eql('Product successfully added!');
                      //res.body.result.should.have.property('ok').eql(1);
                     // res.body.result.should.have.property('n').eql(1);
                  done();
                });
          });
      });
  });
 });


 ///https://www.digitalocean.com/community/tutorials/test-a-node-restful-api-with-mocha-and-chai