const mongoose = require('mongoose');

module.exports = () => {
    const db = mongoose.connect('mongodb://0.0.0.0:27017/Marketplace');
    require('../models/product.model');
    require('../models/categories.model');
    return db;
};
