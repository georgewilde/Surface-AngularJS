var _ = require('lodash');

var comments = [
  {"id": 1, "storyId": 1, "serId": 1, "commentText": "I really like this idea and think we should defo do it!", "createdDatetime": "2016-05-12 22:37:01"},
];

module.exports = {
  get: function(storyId) {
    return _.find(comments, function(comments) {
      return comments.storyId === storyId;
    });
  },
  all: function() {
    return comments;
  }
};