var _ = require('lodash');

var users = [
    {"id": 1,  "email": "kurt.cobain@codeweavers.net", "username": "kurtcobain", "name": "Kurt Cobain", "passwordHash": "test", "createdDatetime": "2016-04-12T12:19:12.654Z"},
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
    },

    update: function(user) {
        var updatedUser;

        for (var i=0, l=users.length; i<l; i++) {
            if (users[i].id === user.id) {
                _.assign(users[i], user);
                updatedUser = users[i];
                break;
            }
        }
        return updatedUser;
    },

    delete: function(id) {
        var deletedUser;

        for (var i=0, l=users.length; i<l; i++) {
            if (users[i].id === id) {
                deletedUser = users[i];
                users.splice(i, 1);
                break;
            }
        }

        return deletedUser;
    },

    create: function(user) {
        lastId += 1;
        user.id = lastId;
        users.push(user);

        return user;
    }
};