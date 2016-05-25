var _ = require('lodash');
var User = require('./user');

var comments = [
    {"id": 1, "storyId": 1, "userId": 1, "commentText": "This is a terrible plan.", "createdDatetime": "2016-01-10T13:17:01.234Z"},
    {"id": 2, "storyId": 1, "userId": 2, "commentText": "I'm happy to help when we start this.", "createdDatetime": "2016-02-11T15:27:11.234Z"},
    {"id": 3, "storyId": 2, "userId": 3, "commentText": "I don't understand why we would want to do this. What's wrong with the way we've always done things. I hate change, it always causes us problems. What we need is faster horses not motor cars!", "createdDatetime": "2016-03-12T16:37:21.234Z"},
    {"id": 4, "storyId": 3, "userId": 4, "commentText": "Can you please give some more detail of how this might work.", "createdDatetime": "2016-04-13T17:47:31.234Z"},
    {"id": 5, "storyId": 3, "userId": 1, "commentText": "Bring it on!", "createdDatetime": "2016-05-14T18:57:41.234Z"},
    {"id": 6, "storyId": 3, "userId": 2, "commentText": "This will take hours and hours to do.", "createdDatetime": "2016-01-15T09:47:51.234Z"},
    {"id": 7, "storyId": 4, "userId": 3, "commentText": "I really like this idea and think we should defo do it :)", "createdDatetime": "2016-05-12T22:37:01.234Z"},
    {"id": 8, "storyId": 4, "userId": 4, "commentText": "Great plan man", "createdDatetime": "2016-02-16T02:37:11.234Z"},
    {"id": 9, "storyId": 4, "userId": 1, "commentText": "What day shall we meet up to talk about this?", "createdDatetime": "2016-03-17T10:27:21.234Z"}
];
var lastId = 9;

var buildComments = function() {
    var rawComments = JSON.parse(JSON.stringify(comments)),
        builtComments = [],
        comment;

    for (var i=0, l=rawComments.length; i<l; i++) {
        comment = rawComments[i];
        comment.user = User.get(comment.userId);

        delete comment.user.passwordHash;
        delete comment.user.createdDatetime;
        
        builtComments.push(comment);
    }

    return builtComments;
};

module.exports = {
    get: function(commentId) {
        return _.find(buildComments(), function(comments) {
          return comments.id === commentId;
        });
    },

    all: function() {
        return buildComments();
    },

    byStory: function(storyId) {
        return _.where(buildComments(), {storyId: storyId});
    }
};