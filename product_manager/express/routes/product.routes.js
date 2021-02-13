const ProductController = require('../controllers/product.controller');
module.exports = function(app){
    app.post('/api/product', ProductController.createProduct);
    app.get('/api/product', ProductController.getAllProduct);
    app.get('/api/people/:id', ProductController.getProduct);

}

