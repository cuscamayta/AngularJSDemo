var app = angular.module('salesApp', []);

app.config(['$routeProvider', function ($routeProvider) {

    $routeProvider
        .when('/', { templateUrl: '/Scripts/app/templates/listProduct.html',controller:'listProductController' })
        .when('/products', { templateUrl: '/Scripts/app/templates/listProduct.html', controller: 'listProductController' })
        .when('/detail', { templateUrl: '/Scripts/app/templates/detail.html', controller: 'detailController' })
        .when('/newProduct', { templateUrl: '/Scripts/app/templates/product.html',controller:'productController' })
        .when('/manageProduct', { templateUrl: '/Scripts/app/templates/manageProduct.html', controller: 'manageController' })
        .when('/addProduct', { templateUrl: '/Scripts/app/templates/addProduct.html', controller: 'manageController' })
        

        .otherwise({ rediretTo: '/products' });
}]);