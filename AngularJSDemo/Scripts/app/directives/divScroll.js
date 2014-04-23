app.directive('divScroll', function ($window) {
    //console.log('entry here');
    return {
        // con restrict E le decimos JS que utilizara como nombre de elemento
        restrict: 'A',
        //la funcion link le agrega el comportamiento indicado a la vista        
        link: function (scope, element) {

            var currentHeight = $('#main_content').height() - $('#DivFirstRowContainer').height() - 50;
            angular.element($window).bind('resize', function () {

                currentHeight = $('#main_content').height() - $('#DivFirstRowContainer').height() - 50;
                $(element).height(currentHeight);
            });
            $(element).height(currentHeight);
        }
    }

});