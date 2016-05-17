var _ = require('lodash');

var users = [
  {"id": 1,  "email": "georgewilde@codeweavers.net", "username": "georgewilde", "name": "George Wilde", "passwordHash": "test"},
  {"id": 2,  "email": "tom.jones@codeweavers.net", "username": "tomjones", "name": "Tom Jones", "passwordHash": "test"},
  {"id": 3,  "email": "ringo.star@codeweavers.net", "username": "ringostar", "name": "Ringo Star", "passwordHash": "test"},
  {"id": 4,  "email": "joni.mitchell@codeweavers.net", "username": "jonimitchell", "name": "Joni Mitchell", "passwordHash": "test"}
];

module.exports = {
  get: function(id) {
    return _.find(users, function(user) {
      return user.id === id;
    });
  },
  all: function() {
    return users;
  }
};