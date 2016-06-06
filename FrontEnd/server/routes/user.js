var _ = require('lodash');
var User = require('../models/user');

module.exports = function(app) {
    app.get('/user', function(req, res) {
        res.json(User.all());
    });

    app.get('/user/:id', function(req, res) {
        var userId = parseInt(req.params.id, 10);
        res.json(User.get(userId) || {});
    });

    app.put('/user/:id', function(req, res) {
        res.json(User.update(req.body));
    });
};