const ProductModel = require('../models/product.model');

exports.fetch = async(req, res, next) => {
    console.log('[PUT]The json params:', req.params);
    console.log('[PUT]The json query:', req.query);
    console.log('[PUT]The json body:', req.body);

    if(req.query.name)
    {
        if(req.query.name.includes('['))
        {
            req.query.name = req.query.name.slice(1, -1);
        }

        const products = await ProductModel.find({ name: { $regex: req.query.name, $options: 'i' } });
        res.status(200).json(products);
    }
    else
    {
        const products = await ProductModel.find();
        res.status(200).json(products);
    }
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
    // console.log('[PUT]The query id:', req.query.id );
    // console.log('[PUT]The json body:', req.body);
    try {
        const productId = req.query.id == null ? req.body.id : req.query.id;
        req.body.id = productId;
        const product = new ProductModel(req.body);
        // console.log('[PUT]The body:', product);
        // console.log('[PUT]The productId:', productId);
        const productUpdate = await ProductModel.findByIdAndUpdate(productId, product);
        
        if (productUpdate) {
            res.status(200).json(product);
        } else {
            res.status(404).json({ message: '[404]Product not found' });
        }
    } catch (error) {
        
        res.status(500).json({ error, message: '[500]Product not found' });
    }
}

exports.deleteById = async(req, res, next) => {
    try {
        console.log('[PUT]The json body:', req.body);
        const productId = req.query.id == null ? req.body.id : req.query.id;
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

exports.findWithParams = async(req, res, next) => {
    console.log('[PUT]The json params:', req.params);
    console.log('[PUT]The json query:', req.query);
    console.log('[PUT]The json body:', req.body);
    try {
        console.log('[PUT]The json body:', req.body);
        const result = await ProductModel.deleteMany({});

        res.status(200).json({ message: 'All products deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Internal server error' });
    }
}

module.exports.save = async (req, res) => {
    console.log('The json body:', req.body);
    console.log('The json params:', req.params);
    const product = new ProductModel(req.body);
    let result = await product.save();
    res.status(200).json(result);
}