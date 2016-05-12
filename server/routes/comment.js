var Comment = require('../models/comment');

module.exports = function(app) {
  app.get('/comment', function(req, res) {
    res.json(Comment.all());
  });

  app.get('/comment/:id', function(req, res) {
    var commentId = parseInt(req.param('id'), 10);
    res.json(Comment.get(commentId) || {});
  });
};