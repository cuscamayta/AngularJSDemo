var app = angular.module('salesApp', []);

app.config(['$routeProvider', function ($routeProvider) {

    $routeProvider
        .when('/', { templateUrl: '/Scripts/app/templates/product.html',controller:'productController' })
        .when('/products', { templateUrl: '/Scripts/app/templates/product.html', controller: 'productController' })
        .when('/detail', { templateUrl: '/Scripts/app/templates/detail.html', controller: 'detailController' })
        .otherwise({ rediretTo: '/products' });
}]);