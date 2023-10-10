var express = require('express');
var router = express.Router();
var apiRouter = require('./api');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Marketplace' });
});

router.get('/addNewProduct', function(req, res, next) {
  res.render('productInput', { title: 'Add new Product' });
});

router.get('/getProductById', function(req, res, next) {
  res.render('idInput', { title: 'Get Product By Id', apiUrl: "api/products/:id"});
});

router.get('/updateProduct', function(req, res, next) {
  res.render('productUpdate', { title: 'Update product by id' });
});

router.get('/addNewProduct', function(req, res, next) {
  res.render('productInput', { title: 'Add new Product' });
});

router.use('/api', apiRouter)

module.exports = router;
