var Comment = require('../models/comment');

module.exports = function(app) {
    app.get('/comment', function(req, res) {
        res.json(Comment.all());
    });

    app.get('/comment/:id', function(req, res) {
        var commentId = parseInt(req.param('id'), 10);
        res.json(Comment.get(commentId) || {});
    });

    app.get('/comment/story/:id', function(req, res) {
        var storyId = parseInt(req.param('id'), 10);
        res.json(Comment.byStory(storyId) || {});
    });

    app.post('/comment', function(req, res) {
        res.json(Comment.create(req.body));
    });
};