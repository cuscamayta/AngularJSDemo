app.controller('manageController', function ($scope,productService,$location) {


    init();

    function loadProducts() {
      
            $scope.listProduct = productService.getProducts();
       
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
    $scope.selectColor = function (e, color) {
        if (e.target.checked)
           $scope.product.colors.push(angular.copy(color));
        else {
            $scope.product.colors.splice(indexof($scope.product.colors,color),1);
        }
    };
    $scope.$watch('product', function (newValue, oldValue) {
        if (oldValue == null) return;
        if (oldValue != newValue)
            $scope.changed = true;
    },true);

    function init() {
        $scope.product = {
            Name: '',
            Model: '',
            Price: 0,
            Description: '',
            path: '',
            colors: [],
            Material:''
        };
        $scope.changed = false;
        $scope.listProduct = [];
        $scope.productsToDelete = [];
        loadProducts();
        $scope.colors = ['Rojo', 'Azul', 'Negro', 'Amarrillo', 'Rosa', 'Fucsia'];
    }
});