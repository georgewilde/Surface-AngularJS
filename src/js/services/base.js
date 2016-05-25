////angular.module('Surface')
////    .service('BaseService', function() {
////        addCreatedDateFormats = function(resource) {
////            resource.createdMoment = moment(resource.createdDatetime);
////            resource.createdDatetimeUK = resource.createdMoment.format("Do MMMM YYYY [at] h:ma");
////        };
////    }
////);
//
//angular.module('Surface')
//    .service('BaseService', function () {
//        this.addCreatedDateFormats = function (resource) {
//            resource.createdMoment = moment(resource.createdDatetime);
//            resource.createdDatetimeUK = resource.createdMoment.format("Do MMMM YYYY [at] h:ma");
//        };
//
//
//    }
//);
//
//function GenericRepository(baseUrl, UI) {
//    function handleRetrieveSuccess() {
//        UI.model = result.data;
//    }
//
//    function handleRetrieveError() {
//        console.log(result);
//    }
//
//    this.retrieveAll = function () {
//        return $http.get(baseUrl).then(handleRetrieveSuccess, handleRetrieveError);
//    };
//
//    this.retrieve = function (id) {
//        return $http.get(baseUrl + '/' + id).then(handleRetrieveSuccess, handleRetrieveError);
//    };
//
//    this.save = function (story) {
//        return $http.post(baseUrl, story);
//    };
//
//    this.update = function (story) {
//        return $http.put(baseUrl + '/' + story.id, story);
//    };
//}