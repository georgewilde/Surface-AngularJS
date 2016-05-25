var _ = require('lodash');
var Comment = require('./comment');
var User = require('./user');
var stories = [
  {"id":1 ,"userId": 1, "title": "Client support want a way of prioritising development tasks", "description": "The client support team have been finding it difficult to pass prioritised tasks over to the Ninja team. We need a system that will allow them to do this easily.", "votes": 10, "commentCount": 10, "createdDatetime": "2016-03-21T13:28:06.419Z"},
  {"id":2 ,"userId": 3, "title": "Developers want to separate tests from data", "description": "Some of the service tests are tightly coupled to real data. When this data changes the tests fail. The tests should be improved to include their own data.", "votes": 4, "commentCount": 212, "createdDatetime": "2016-05-08T20:06:10.419Z"},
  {"id":3 ,"userId": 2, "title": "Developers want a reliable way to commit to SVN", "description": "Hare SVN is reported as being flakey and causing frustration.", "votes": 8, "commentCount": 4, "createdDatetime": "2016-04-12T12:19:12.419Z"},
  {"id":4 ,"userId": 4, "title": "Developers want fast build times when deploying code", "description": "The build time is currently getting in the way of productivity.", "votes": 20, "commentCount": 0, "createdDatetime": "2016-04-08T14:43:30.419Z"},
  {"id":5 ,"userId": 3, "title": "Developers want a guide of things to check when servers are running slowly", "description": "When the servers are running slowly it would be useful to have a quick guide of things to check that might help identify the cause of the problem.", "votes": 0, "commentCount": 0, "createdDatetime": "2016-01-12T12:29:10.419Z"},
  {"id":6 ,"userId": 1, "title": "Developers want better inter-team communication", "description": "Some have mentioned that the teams don't collaborate together well enough and this impacts performance.", "votes": 0, "commentCount": 0, "createdDatetime": "2016-05-01T13:34:21.419Z"},
];
var lastId = 6;

var buildStories = function() {
  // Make a deep copy so we don't change the main stories array
  var rawStories = JSON.parse(JSON.stringify(stories));
  var builtStories = [];
  var story;

  for(var i=0, l=rawStories.length; i < l; i++) {
    story = rawStories[i];
    story.user = User.get(story.userId);
    story.comments = Comment.get(story.id);
    builtStories.push(story);
  }
  return builtStories
};

module.exports = {
  get: function(id) {
    return _.find(buildStories(), function(story){
      return story.id === id;
    });
  },
  all: function() {
    return buildStories();
  },
  update: function(story) {
    var updatedStory;
    for(var i=0, l=stories.length; i < l; i++) {
      if(stories[i].id === story.id){
        _.assign(stories[i], story);
        updatedStory = stories[i];
        break;
      }
    }
    return updatedStory;
  },
  delete: function(id) {
    var deletedStory;
    for(var i=0, l=stories.length; i < l; i++) {
      if(stories[i].id === id){
        deletedStory = stories[i];
        stories.splice(i, 1);
        break;
      }
    }
    return deletedStory;
  },
  create: function(story) {
    lastId += 1;
    story.id = lastId;
    stories.push(story)
    return story;
  }
};