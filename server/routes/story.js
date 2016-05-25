var _ = require('lodash');
var Story = require('../models/story');

module.exports = function(app) {
    app.get('/story', function(req, res) {
        res.json(Story.all());
    });

    app.post('/story', function(req, res) {
        res.json(Story.create(req.body));
    });

    app.put('/story/:id', function(req, res) {
        res.json(Story.update(req.body));
    });

    app.get('/story/:id', function(req, res) {
        var storyId = parseInt(req.param('id'), 10);
        res.json(Story.get(storyId) || {});
    });

    app.delete('/story/:id', function(req, res) {
        res.json(Story.delete(parseInt(req.param('id'), 10)) || {});
    });
};