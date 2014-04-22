﻿var app = angular.module('salesApp', []);

app.config(['$routeProvider', function ($routeProvider) {

    $routeProvider
        .when('/', { templateUrl: '/Scripts/app/templates/listProduct.html',controller:'listProductController' })
        .when('/products', { templateUrl: '/Scripts/app/templates/listProduct.html', controller: 'listProductController' })
        .when('/detail', { templateUrl: '/Scripts/app/templates/detail.html', controller: 'detailController' })
        .when('/newProduct', { templateUrl: '/Scripts/app/templates/product.html', controller: 'productController' })
        .when('/home', { templateUrl: '/Scripts/app/templates/home.html', controller: 'homeController' })
        .when('/checkoutProduct', { templateUrl: '/Scripts/app/templates/checkoutProduct.html', controller: 'checkoutProduct' })
        .otherwise({ rediretTo: '/products' });
}]);