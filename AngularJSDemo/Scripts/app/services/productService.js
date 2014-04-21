app.service('productService', function () {

    this.getProducts = function () {
        return products;
    };


    this.insertProduct = function (product) {
        product.ProductId = products.length + 1;
        products.push(product);
    };


    this.deleteProduct = function (productId) {
        for (var i = products.length - 1; i >= 0; i--) {
            if (prodcuts[i].ProductId === productId) {
                products.splice(i, 1);
                break;
            }
        }
    };
 

    this.getProduct = function (productId) {
        for (var i = 0; i < products.length; i++) {
            if (products[i].ProductId === productId) {
                return products[i];
            }
        }
        return null;
    };



    var products = [{
        ProductId: 1,
        Name: 'Cover 001',
        Model: 'Model 001',
        Price: 125,
        Description: 'This is a description for Cover 001',
        path: '/Content/images/funda01.jpg',
        colors: ['red', 'black', 'white']
    },
    {
        ProductId: 2,
        Name: 'Cover 002',
        Model: 'Model 002',
        Price: 125,
        Description: 'This is a description for Cover 002',
        path: '/Content/images/funda02.jpg',
        colors: ['red', 'black', 'white', 'blue']
    },
    {
        ProductId: 3,
        Name: 'Cover 003',
        Model: 'Model 003',
        Price: 200,
        Description: 'This is a description for Cover 003',
        path: '/Content/images/funda03.jpg',
        colors: ['red', 'black', 'green']
    },
    {
        ProductId: 4,
        Name: 'Cover 004',
        Model: 'Model 004',
        Price: 50,
        Description: 'This is a description for Cover 004',
        path: '/Content/images/funda04.jpg',
        colors: ['red', 'black']
    },
    {
        ProductId: 5,
        Name: 'Cover 005',
        Model: 'Model 005',
        Price: 60,
        Description: 'This is a description for Cover 005',
        path: '/Content/images/funda05.jpg',
        colors: ['red', 'black', 'white', 'green']
    },
    {
        ProductId: 6,
        Name: 'Cover 006',
        Model: 'Model 006',
        Price: 125,
        Description: 'This is a description for Cover 006',
        path: '/Content/images/funda06.jpg',
        colors: ['red', 'black', 'white']
    },
    {
        ProductId: 7,
        Name: 'Cover 007',
        Model: 'Model 007',
        Price: 125,
        Description: 'This is a description for Cover 007',
        path: '/Content/images/funda07.jpg',
        colors: ['red', 'black']
    },
    {
        ProductId: 8,
        Name: 'Cover 008',
        Model: 'Model 008',
        Price: 45,
        Description: 'This is a description for Cover 008',
        path: '/Content/images/funda08.jpg',
        colors: ['red', 'black']
    },
    {
        ProductId: 9,
        Name: 'Cover 009',
        Model: 'Model 009',
        Price: 62,
        Description: 'This is a description for Cover 009',
        path: '/Content/images/funda09.jpg',
        colors: ['red', 'black', 'white']
    },
    {
        ProductId: 10,
        Name: 'Cover 0010',
        Model: 'Model 0010',
        Price: 50,
        Description: 'This is a description for Cover 0010',
        path: '/Content/images/funda10.jpg',
        colors: ['red', 'black', 'white']
    },
    {
        ProductId: 11,
        Name: 'Cover 0010',
        Model: 'Model 0011',
        Price: 15,
        Description: 'This is a description for Cover 0011',
        path: '/Content/images/funda11.jpg',
        colors: ['red', 'black', 'white']
    },
    {
        ProductId: 12,
        Name: 'Cover 0012',
        Model: 'Model 0012',
        Price: 68,
        Description: 'This is a description for Cover 0012',
        path: '/Content/images/funda12.jpg',
        colors: ['red', 'black', 'white']
    },
    {
        ProductId: 13,
        Name: 'Cover 0013',
        Model: 'Model 0013',
        Price: 85,
        Description: 'This is a description for Cover 0013',
        path: '/Content/images/funda13.jpg',
        colors: ['red', 'black', 'white']
    },
    {
        ProductId: 14,
        Name: 'Cover 0014',
        Model: 'Model 0014',
        Price: 200,
        Description: 'This is a description for Cover 0014',
        path: '/Content/images/funda14.jpg',
        colors: ['red', 'black', 'white']
    },
    {
        ProductId: 15,
        Name: 'Cover 0015',
        Model: 'Model 0015',
        Price: 89,
        Description: 'This is a description for Cover 0015',
        path: '/Content/images/funda15.jpg',
        colors: ['red', 'black', 'white']
    },
    {
        ProductId: 16,
        Name: 'Cover 0016',
        Model: 'Model 0016',
        Price: 125,
        Description: 'This is a description for Cover 0016',
        path: '/Content/images/funda16.jpg',
        colors: ['red', 'black', 'white']
    },
    {
        ProductId: 17,
        Name: 'Cover 0017',
        Model: 'Model 0017',
        Price: 52,
        Description: 'This is a description for Cover 0017',
        path: '/Content/images/funda17.jpg',
        colors: ['red', 'black', 'white']
    },
    {
        ProductId: 18,
        Name: 'Cover 0018',
        Model: 'Model 0018',
        Price: 63,
        Description: 'This is a description for Cover 0018',
        path: '/Content/images/funda18.jpg',
        colors: ['red', 'black', 'white']
    },
    {
        ProductId: 19,
        Name: 'Cover 0019',
        Model: 'Model 0019',
        Price: 58,
        Description: 'This is a description for Cover 0019',
        path: '/Content/images/funda19.jpg',
        colors: ['red', 'black', 'white']
    },
    {
        ProductId: 20,
        Name: 'Cover 0020',
        Model: 'Model 0020',
        Price: 20,
        Description: 'This is a description for Cover 0020',
        path: '/Content/images/funda20.jpg',
        colors: ['red', 'black', 'white']
    },
    {
        ProductId: 21,
        Name: 'Cover 0021',
        Model: 'Model 0021',
        Price: 78,
        Description: 'This is a description for Cover 0021',
        path: '/Content/images/funda21.jpg',
        colors: ['red', 'black', 'white']
    },
    {
        ProductId: 22,
        Name: 'Cover 0022',
        Model: 'Model 0022',
        Price: 69,
        Description: 'This is a description for Cover 0022',
        path: '/Content/images/funda22.jpg',
        colors: ['red', 'black', 'white']
    },
    {
        ProductId: 23,
        Name: 'Cover 0023',
        Model: 'Model 0023',
        Price: 78,
        Description: 'This is a description for Cover 0023',
        path: '/Content/images/funda23.jpg',
        colors: ['red', 'black', 'white']
    },
    {
        ProductId: 24,
        Name: 'Cover 0024',
        Model: 'Model 0024',
        Price: 74,
        Description: 'This is a description for Cover 0024',
        path: '/Content/images/funda24.jpg',
        colors: ['red', 'black', 'white']
    },
    {
        ProductId: 25,
        Name: 'Cover 0024',
        Model: 'Model 0024',
        Price: 74,
        Description: 'This is a description for Cover 0024',
        path: '/Content/images/funda25.jpg',
        colors: ['red', 'black', 'white']
    },
    {
        ProductId: 26,
        Name: 'Cover 0024',
        Model: 'Model 0024',
        Price: 74,
        Description: 'This is a description for Cover 0024',
        path: '/Content/images/funda26.jpg',
        colors: ['red', 'black', 'white']
    },
    {
        ProductId: 27,
        Name: 'Cover 0024',
        Model: 'Model 0024',
        Price: 74,
        Description: 'This is a description for Cover 0024',
        path: '/Content/images/funda27.jpg',
        colors: ['red', 'black', 'white']
    },
    {
        ProductId: 24,
        Name: 'Cover 0024',
        Model: 'Model 0024',
        Price: 74,
        Description: 'This is a description for Cover 0024',
        path: '/Content/images/funda28.jpg',
        colors: ['red', 'black', 'white']
    },
    {
        ProductId: 24,
        Name: 'Cover 0024',
        Model: 'Model 0024',
        Price: 74,
        Description: 'This is a description for Cover 0024',
        path: '/Content/images/funda29.jpg',
        colors: ['red', 'black', 'white']
    }

    ];

    
});