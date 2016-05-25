var _ = require('lodash');

var users = [
  {"id": 1,  "email": "kirt.cobain@codeweavers.net", "username": "kirtcobain", "name": "Kirt Cobain", "passwordHash": "test", "createdDatetime": "2016-04-12T12:19:12.654Z"},
  {"id": 2,  "email": "tom.jones@codeweavers.net", "username": "tomjones", "name": "Tom Jones", "passwordHash": "test", "createdDatetime": "2016-03-12T12:19:12.654Z"},
  {"id": 3,  "email": "ringo.star@codeweavers.net", "username": "ringostar", "name": "Ringo Star", "passwordHash": "test", "createdDatetime": "2016-02-12T12:19:12.654Z"},
  {"id": 4,  "email": "joni.mitchell@codeweavers.net", "username": "jonimitchell", "name": "Joni Mitchell", "passwordHash": "test", "createdDatetime": "2016-01-12T12:19:12.654Z"}
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