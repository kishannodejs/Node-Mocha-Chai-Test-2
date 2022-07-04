var express = require('express');
var router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
var product_controller = require('../controllers/product');


// a simple test url to check that all of our files are communicating correctly.
router.get('/test', product_controller.test);

router.get('/getall', product_controller.product_getall);

router.post('/create', product_controller.product_create);

router.get('/:id', product_controller.product_details);

router.put('/:id/', product_controller.product_update);

router.delete('/:id/', product_controller.product_delete);


module.exports = router;