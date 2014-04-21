using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace AngularJSDemo.Infraestructure.Domain
{
    public class Product
    {
        public int ProductId { get; set; }
        public string Model { get; set; }
        public string Name { get; set; }
        public int Price { get; set; }
        public string Description { get; set; }
        public string Path { get; set; }
    }

    public class ShoppingCart
    {
        public List<Product> Products { get; set; }
        public int Count { get; set; }
        public int Total { get; set; }
    }
}