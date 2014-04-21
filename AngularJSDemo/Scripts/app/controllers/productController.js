﻿app.controller('listProductController', function ($scope, productService) {

    $scope.currentPage = 0;
    $scope.pageSize = 12;
    init();

    function init() {
        $scope.products = productService.getProducts();
        $scope.currentProducts = $scope.products.slice($scope.currentPage * $scope.pageSize, ($scope.currentPage * $scope.pageSize) + $scope.pageSize);
        updateProducts();
    }


    $scope.totalPages = Math.ceil($scope.products.length / $scope.pageSize)

    $scope.onPrevius = function () {
        $scope.currentPage = $scope.currentPage - 1;

        $scope.currentProducts = $scope.products.slice($scope.currentPage * $scope.pageSize, ($scope.currentPage * $scope.pageSize) + $scope.pageSize);

        updateProducts();
    };


    $scope.onNext = function () {
        $scope.currentPage = $scope.currentPage + 1;
        $scope.currentProducts = $scope.products.slice($scope.currentPage * $scope.pageSize, ($scope.currentPage * $scope.pageSize) + $scope.pageSize);
        updateProducts();
    };

    function updateProducts() {
        $scope.productsUp = $scope.currentProducts.slice(0, 6);
        $scope.productsDown = $scope.currentProducts.slice(6, 12);

    }





});

app.controller('productController', function ($scope) {



    init();
    function init() {

    }

});

app.filter('startFrom', function () {
    return function (input, start) {
        start = +start; //parse to int
        return input.slice(start);
    }
});