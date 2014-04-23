app.directive('listTable', ['$window',
    function ($window) {
        return {
            restrict: 'A',

            link: function (scope, element, attrs) {
                var heigthLess = 110;
                if (attrs.hasbutton) {
                    heigthLess = 130;
                }
                var currentHeight = $('#main_content').height() - $('#header-project').height() - heigthLess;
                angular.element($window).bind('resize', function () {

                    currentHeight = $('#main_content').height() - $('#header-project').height() - heigthLess;
                    $(element).height(currentHeight);
                });
                $(element).height(currentHeight);
            }
        };
    }
]);

