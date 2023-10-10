var express = require('express');
var router = express.Router();

var usersRouter = require('./users');
router.use('/users', usersRouter);

let productController = require('../controllers/product.controller');
const productModel = require('../models/product.model');

router.get('/products', productController.fetch);
router.get('/products/:id', productController.fetchById);
router.post('/products', productController.save);
router.put('/products/:id', productController.updateById);
router.delete('/products/:id', productController.deleteById);
router.delete('/products', productController.deleteAll);

router.get('/', function(req, res, next) {
    res.render('index', { title: 'Marketplace' });
  });

module.exports = router;