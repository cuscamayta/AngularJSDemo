app.controller('manageController', function ($scope,productService,$location) {


    init();

    function loadProducts() {
      
            $scope.listProduct = productService.getProducts();
            $scope.product = {
                Name: 'Cover 004',
                Model: 'Model 004',
                Price: 50,
                Description: 'This is a description for Cover 004',
                path: '/Content/images/funda04.jpg',
                colors: ['red', 'black']
            }
    }

    $scope.saveProduct = function () {
        productService.insertProduct($scope.product);
    }
    function indexof(list, id) {
        var indexReturn = -1;
        for (var i = 0; i < list.lenght; i++) {
            if (list[i] == id)
                indexReturn = i;
        }
        return indexReturn;
    };

    $scope.redirecToAddProduct = function () {
        $location.path('/addProduct');
    }
    $scope.deleteProducts = function () {
        angular.forEach($scope.productsToDelete,function (value) {
            productService.deleteProduct(value);
        });
        $scope.listProduct = productService.getProducts();
    };
    $scope.selectProduct = function (e,productId) {
        if (e.target.checked) {
            $scope.productsToDelete.push(angular.copy(productId));
        } else {
            $scope.productsToDelete.splice(indexof($scope.productsToDelete,productId),1);
        }
        
    };



    function init() {
        $scope.listProduct = [];
        $scope.productsToDelete = [];
        loadProducts();
    }
});