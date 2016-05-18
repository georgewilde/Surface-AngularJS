angular.module('Surface')
    .directive('surfaceTooltip', function() {
        return {
            restrict: 'A',
            link: function(scope, element) {
                $(element).hover(function() {
                    console.log('Hovered');
                    $(element).tooltip('show');
                }, function(){
                    $(element).tooltip('hide');
                });
            }
        };
    });