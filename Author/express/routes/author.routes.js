const controller = require('../controllers/author.controller');

module.exports = app => {
    app.get('/api/getAllAuthors', controller.findAllAuthors);
    app.get('/api/author/:id', controller.findAuthor);
    app.post('/api/create/new', controller.createAuthor);
    app.delete('/api/destroy/:id', controller.deleteAuthor);
    app.put('/api/update/:id', controller.updateAuthor);
}