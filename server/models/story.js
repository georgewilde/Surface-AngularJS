var _ = require('lodash');
var Comment = require('./comment');
var User = require('./user');
var stories = [
  {"id":1 ,"userId": 1, "description": "Developers want a voting system.", "votes": 0, "createdDatetime": "2016-05-12 22:29:10"},
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