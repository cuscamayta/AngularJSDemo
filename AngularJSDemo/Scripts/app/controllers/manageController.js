app.controller('manageController', function ($scope,productService,$location) {


    init();

    function loadProducts() {
      
            $scope.listProduct = productService.getProducts();
        $scope.product = {
            Name: '',
            Model: '',
            Price: 0,
            Description: '',
            path: '',
            colors: []
        };
    }

    $scope.saveProduct = function() {
        productService.insertProduct($scope.product);
        $location.path('/manageProduct');
    };
    function indexof(list, id) {
        var indexReturn = -1;
        for (var i = 0; i < list.lenght; i++) {
            if (list[i] == id)
                indexReturn = i;
        }
        return indexReturn;
    };

    $scope.redirecToAddProduct = function() {
        $location.path('/addProduct');
    };

    $scope.messageConfirmDelete = function () {
        console.log($scope.productsToDelete);
        $("#modal-deleteProducts").modal('show');
    };
    $scope.deleteProducts = function () {
        angular.forEach($scope.productsToDelete,function (value) {
            productService.deleteProduct(value.ProductId);
        });
        $scope.listProduct = productService.getProducts();
        $scope.productsToDelete = [];
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