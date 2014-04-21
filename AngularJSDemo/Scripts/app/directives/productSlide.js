app.directive('productSlide', function () {

    //<div class="row-fluid">
    //<ul class="thumbnails">

    //<li class="span2">
    //       <div class="thumbnail">
    //           <img data-src="holder.js/300x200" alt="300x200" src="/Content/images/funda01.jpg" style="width: 300px; height: 200px;">
    //           <div class="caption">
    //               <a href="#">
    //                   <h5>Cover Model 0011-0012</h5>
    //               </a>
    //           </div>
    //       </div>
    //   </li>

    return {
        restrict: 'A',
        scope: {
            products: '='
        },
        link: function (scope, element, attrs) {

            scope.currentPage = 0;
            scope.pageSize = scope.products.length;
            scope.numberOfPages = function () {
                return Math.ceil($scope.products.length / $scope.pageSize);
            }


            scope.onPrevius = function () {
                scope.currentPage = scope.currentPage - 1;
            };


            scope.onNext = function () {
                scope.currentPage = scope.currentPage + 1;
            };


            

            function createRowFluidContainer() {
                var mainContainer = $('<div>').addClass('row-fluid');
                return mainContainer;
            }

            function createListContainer() {
                var subContainer = $('<ul>').addClass('thumbnails');
                return subContainer;
            }

            function createListElement(product) {
                var caption = $('<div>').addClass('caption').append($('<a>', { 'href': '#' }).append($('<h5>').html(product.Model))),
                      image = $('<img>', { 'data-src': 'holder.js/300x200', 'alt': product.Name, 'src': product.path }).css({ 'width': '300px', 'height': '200px' });

                var listElement = $('<li>').addClass('span2').append($('<div>').addClass('thumbnail').append(image).append(caption));
                return listElement;
            }
        }

    }
});

app.filter('startFrom', function () {
    return function (input, start) {
        start = +start; //parse to int
        return input.slice(start);
    }
});