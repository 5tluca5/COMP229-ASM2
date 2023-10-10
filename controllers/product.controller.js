const ProductModel = require('../models/product.model');

exports.fetch = async(req, res, next) => {
    const products = await ProductModel.find();
    res.status(200).json(products);
}

exports.fetchById = async(req, res) => {
    try {
        const product = await ProductModel.findById(req.query.id);
        
        if (product) {
            res.status(200).json(product);
        } else {
            res.status(404).json({ message: '[404]Product not found' });
        }
    } catch (error) {
        res.status(500).json({ message: '[500]Product not found' });
    }
}

exports.updateById = async(req, res, next) => {
    console.log('[PUT]The json body:', req.body);
    try {
        const productId = req.body.id;
        const product = new ProductModel(req.body);
        const productUpdate = await ProductModel.findByIdAndUpdate(productId, product);
        
        if (product) {
            res.status(200).json(productUpdate);
        } else {
            res.status(404).json({ message: '[404]Product not found' });
        }
    } catch (error) {
        res.status(500).json({ message: '[500]Product not found' });
    }
}

exports.deleteById = async(req, res, next) => {
    try {
        console.log('[PUT]The json body:', req.body);
        const productId = req.body.id;
        const product = await ProductModel.deleteOne({_id: productId});
        
        if (product.deletedCount > 0) {
            res.status(200).json({ message: 'Product deleted successfully' });
          } else {
            res.status(404).json({ message: 'Product not found' });
          }
    } catch (error) {
        res.status(500).json({ message: 'Internal server error' });
    }
}

exports.deleteAll = async(req, res, next) => {
    try {
        console.log('[PUT]The json body:', req.body);
        const result = await ProductModel.deleteMany({});

        res.status(200).json({ message: 'All products deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Internal server error' });
    }
}
// const example = {
//     name: 'Test product',
//     description:'Hardcoded product for testing purpose.',
//     price: 9.99,
//     quantity: 10,
//     category: 'Men'
// };

module.exports.save = async (req, res) => {
    console.log('The json body:', req.body);
    console.log('The json params:', req.params);
    const product = new ProductModel(req.body);
    let result = await product.save();
    res.status(200).json(result);
}