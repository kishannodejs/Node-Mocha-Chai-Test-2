let chai = require("chai");
let chaiHttp = require("chai-http");
var should = chai.should();
chai.use(chaiHttp);
let server = require("./app");
//Our parent block
describe("Podcast", () => {



     describe("/POST products/create", () => {
      it("it should GET a message", (done) => {
         var text = 'Testing todo route';
      chai.request(server)
          .post("/products/create")
          .send({ from: "KIX", to: "SFO" })
          .end((err, res) => {

            console.log(err)

           // console.log(res)
           expect(response.status).to.eql(200);
                done();
             });
          });
      });


});