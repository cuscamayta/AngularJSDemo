app.controller('detailController', function ($scope,$rootScope, productService) {


    init();

    function init() {
        $scope.product = productService.getProduct($rootScope.productSelected);
    }
});