using AngularJSDemo.Infraestructure.Domain;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AngularJSDemo.Infraestructure.Data
{
    public class DataAccess
    {
        public List<Product> Products { get; set; }


        public DataAccess()
        {
            Products = new List<Product>();
        }
        internal List<Product> GetProducts()
        {
            var listProducts = new List<Product>()
            {
                new Product(){ProductId= new Random().Next(1,10),Name="Cover 001",Model="Cover Model " + new Random().Next(1,100),Price=45,Description="Desfription Test"},
                new Product(){ProductId= new Random().Next(1,10),Name="Cover 002",Model="Cover Model " + new Random().Next(1,100),Price=50,Description="Desfription Test"},
                new Product(){ProductId= new Random().Next(1,10),Name="Cover 003",Model="Cover Model " + new Random().Next(1,100),Price=70,Description="Desfription Test"},
                new Product(){ProductId= new Random().Next(1,10),Name="Cover 004",Model="Cover Model " + new Random().Next(1,100),Price=85,Description="Desfription Test"},
                new Product(){ProductId= new Random().Next(1,10),Name="Cover 005",Model="Cover Model " + new Random().Next(1,100),Price=30,Description="Desfription Test"},
                new Product(){ProductId= new Random().Next(1,10),Name="Cover 006",Model="Cover Model " + new Random().Next(1,100),Price=20,Description="Desfription Test"},
                new Product(){ProductId= new Random().Next(1,10),Name="Cover 007",Model="Cover Model " + new Random().Next(1,100),Price=35,Description="Desfription Test"},
                new Product(){ProductId= new Random().Next(1,10),Name="Cover 008",Model="Cover Model " + new Random().Next(1,100),Price=50,Description="Desfription Test"},
                new Product(){ProductId= new Random().Next(1,10),Name="Cover 009",Model="Cover Model " + new Random().Next(1,100),Price=45,Description="Desfription Test"},
                new Product(){ProductId= new Random().Next(1,10),Name="Cover 010",Model="Cover Model " + new Random().Next(1,100),Price=60,Description="Desfription Test"},
                new Product(){ProductId= new Random().Next(1,10),Name="Cover 011",Model="Cover Model " + new Random().Next(1,100),Price=100,Description="Desfription Test"},
                new Product(){ProductId= new Random().Next(1,10),Name="Cover 012",Model="Cover Model " + new Random().Next(1,100),Price=250,Description="Desfription Test"},
                new Product(){ProductId= new Random().Next(1,10),Name="Cover 013",Model="Cover Model " + new Random().Next(1,100),Price=125,Description="Desfription Test"},
                new Product(){ProductId= new Random().Next(1,10),Name="Cover 001",Model="Cover Model " + new Random().Next(1,100),Price=45,Description="Desfription Test"},
                new Product(){ProductId= new Random().Next(1,10),Name="Cover 002",Model="Cover Model " + new Random().Next(1,100),Price=50,Description="Desfription Test"},
                new Product(){ProductId= new Random().Next(1,10),Name="Cover 003",Model="Cover Model " + new Random().Next(1,100),Price=70,Description="Desfription Test"},
                new Product(){ProductId= new Random().Next(1,10),Name="Cover 004",Model="Cover Model " + new Random().Next(1,100),Price=85,Description="Desfription Test"},
                new Product(){ProductId= new Random().Next(1,10),Name="Cover 005",Model="Cover Model " + new Random().Next(1,100),Price=30,Description="Desfription Test"},
                new Product(){ProductId= new Random().Next(1,10),Name="Cover 006",Model="Cover Model " + new Random().Next(1,100),Price=20,Description="Desfription Test"},
                new Product(){ProductId= new Random().Next(1,10),Name="Cover 007",Model="Cover Model " + new Random().Next(1,100),Price=35,Description="Desfription Test"},
                new Product(){ProductId= new Random().Next(1,10),Name="Cover 008",Model="Cover Model " + new Random().Next(1,100),Price=50,Description="Desfription Test"},
                new Product(){ProductId= new Random().Next(1,10),Name="Cover 009",Model="Cover Model " + new Random().Next(1,100),Price=45,Description="Desfription Test"},
                new Product(){ProductId= new Random().Next(1,10),Name="Cover 010",Model="Cover Model " + new Random().Next(1,100),Price=60,Description="Desfription Test"},
                new Product(){ProductId= new Random().Next(1,10),Name="Cover 011",Model="Cover Model " + new Random().Next(1,100),Price=100,Description="Desfription Test"},
                new Product(){ProductId= new Random().Next(1,10),Name="Cover 012",Model="Cover Model " + new Random().Next(1,100),Price=250,Description="Desfription Test"},
                new Product(){ProductId= new Random().Next(1,10),Name="Cover 013",Model="Cover Model " + new Random().Next(1,100),Price=125,Description="Desfription Test"}

            };

            return listProducts;
        }

        public List<Product> CreateListProduct()
        {
            return Products;
        }

        public bool AddProduct(Product newProduct)
        {
            try
            {
                Products.Add(newProduct);
                return true;
            }
            catch (Exception ex)
            {
                return false;
            }
        }

        public bool DeleteProduct(int productId)
        {

            try
            {
                var listProduct = new List<Product>();
                foreach (var product in Products)
                {
                    if (product.ProductId != productId)
                        listProduct.Add(product);
                }

                Products = listProduct;
                return true;
            }
            catch (Exception)
            {

                return false;
            }
        }

        public bool UpdateProduct(Product product)
        {
            try
            {
                for (int i = 0; i < Products.Count; i++)
                {
                    if (Products[i].ProductId == product.ProductId)
                        Products[i] = product;

                }
                return true;
            }
            catch (Exception)
            {
                return false;
            }
        }



    }
}
