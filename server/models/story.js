var _ = require('lodash');
var Category = require('./category')
var User = require('./user')
var stories = [
  {"id":1 ,"userId": 13, "categoryId": 8, "description": "NgModel Best Practice", "content" : "Always use dot syntax when using NgModel! Treat Scope as read-only in templates & write-only in controllers. The purpose of the scope is to refer to the model, not be the model. The model is your javascript objects. When doing bidirectional binding with ngModel make sure you don't bind directly to the scope properties. This will cause unexpected behavior in the child scopes.", "title" : "NgModel BP"},
  {"id":2 ,"userId": 2, "categoryId": 3, "description" : "Markers on a **DOM element** that tell AngularJS's HTML compiler `$compile` to attach a specified behavior to that DOM element.", "title" : "Directives", "content": "Markers on a **DOM element**"},
  {"id":3 ,"userId": 1, "categoryId": 6, "description" : "Clarify the confusion between Service the term and `service` the angular method and to explain the 5 different Service recipes in Angular.", "title" : "Service Service? Really Angular?","content": "There are 5 Recipes used to create a Service. One of those *was* unfortunately named, Service. So yes, amongst its fellow peers such as Provider Service and Factory Service, there is in fact a Service Service."},
  {"id":4 ,"userId": 2, "categoryId": 6, "description" : "QUESTIONABLE DESCRIPTION GOES HERE", "title" : "TEST TEST TEST", "content": "QUESTIONABLE CONTENT GOES HERE"},
  {"id":5 ,"userId": 4, "categoryId": 6, "description" : "Define Service", "title" : "What is a Service", "content": "Service: Angular services are objects that are wired together using dependency injection (DI). You can use services to organize and share code across your app."},
  {"id":6 ,"userId": 5, "categoryId": 6, "description" : "Steps for Creating a Service", "title" : "How do you create a Service?", "content": "You can register a service to our Angular module `app` with a one of the following 5 recipes: \\n 	- **factory**  \\n 	- **provider**  \\n 	- **service**  \\n 	- **value**  \\n 	- **constant** "}
]
var lastId = 6;

var buildStories = function() {
  // Make a deep copy so we don't change the main stories array
  var rawStories = JSON.parse(JSON.stringify(stories));
  var builtStories = [];
  var story;

  for(var i=0, l=rawStories.length; i < l; i++) {
    story = rawStories[i];
    story.user = User.get(story.userId);
    story.category = Category.get(story.categoryId);
    builtStories.push(story);
  }
  return builtStories
}

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
}