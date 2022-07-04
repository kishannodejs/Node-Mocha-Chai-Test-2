var Product = require('../models/product');

//Simple version, without validation or sanitation
exports.test = function (req, res) {
    console.log("AAAAAAAAAAAAA");
    res.send('Greetings from the Test controller!');
};

exports.product_create = async function (req, res) {

    console.log("JJJJJJJJJJJJJJJJJJJJJJJJJJJ Product save");
    var product = new Product(
        {
            name: req.body.name,
            price: req.body.price
        }
    );

    console.log(product);

  await  product.save(function (err) {
        if (err) {
            return next(err);
        }
      //  res.send('Product Created successfully')
       // res.json({message: "Book successfully added!", book });
        res.send({message: "Product successfully added!", product });
    })
};



exports.product_getall = async (req, res) => {
    console.log("This is get all to do from Controller");
    await Product.find().then((products) => {
      res.send({products});
    }).catch((err) => {
      res.status(400).send(err);
    })
  };

// exports.product_details = function (req, res) {

//     console.log(req.params);
//     Product.findById(req.params.id, function (err, product) {
//         if (err) return next(err);
//         res.send(product);
//     })
// };

exports.product_details = async (req, res) => {
    console.log(req.params);
    console.log("This is get all to do from Controller single product");
    await Product.findById(req.params.id).then((product) => {
      res.send({product});
    }).catch((err) => {
      res.status(400).send(err);
    })
  };

exports.product_update = function (req, res) {
    Product.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, product) {
        if (err) return next(err);
        res.send('Product udpated.');
    });
};

exports.product_delete = function (req, res) {
    Product.findByIdAndRemove(req.params.id, function (err) {
        if (err) return next(err);
        res.send({message: "Product successfully deleted!" });
    })
};