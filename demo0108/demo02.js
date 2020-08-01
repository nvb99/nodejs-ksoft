var Product = /** @class */ (function () {
    function Product(n, p) {
        this.name = n;
        this.price = p;
    }
    Product.prototype.compareByPrice = function (p) {
        var p1 = this.price;
        var p2 = p.price;
        return p1 > p2 ? 1 : (p1 < p2 ? -1 : 0);
    };
    Product.prototype.show = function () {
        console.info("\t> Name: " + this.name + "; Price: " + this.price + "$");
    };
    return Product;
}());
var ProductManager = /** @class */ (function () {
    function ProductManager() {
        this.products = [];
    }
    ProductManager.prototype.addProduct = function (p) {
        this.products.push(p);
    };
    ProductManager.prototype.show = function () {
        //for (let i = 0; i < this.products.length; i++) {
        //    this.products[i].show();
        //}
        this.products.forEach(function (p) {
            p.show();
        });
    };
    // Tim kiem
    ProductManager.prototype.searchByName = function (kw) {
        return this.products.filter(function (p) { return p.name.toLowerCase().indexOf(kw.toLowerCase()) >= 0; });
    };
    ProductManager.prototype.searchByPrice = function (fromPrice, toPrice) {
        return this.products.filter(function (p) { return p.price >= fromPrice && p.price <= toPrice; });
    };
    // sap xep
    ProductManager.prototype.sortByPrice = function () {
        this.products.sort(function (a, b) { return a.compareByPrice(b); });
    };
    return ProductManager;
}());
var sp1 = new Product("BANG", 350);
var sp2 = new Product("Phan viet bang", 50);
var sp3 = new Product("Ban phim", 100);
var sp4 = new Product("Chuot", 80);
var p = new ProductManager();
p.addProduct(sp1);
p.addProduct(sp2);
p.addProduct(sp3);
p.addProduct(sp4);
console.info("===== ALL PRODUCTS");
p.show();
console.info("===== LIST PRODUCTS SEARCH BY NAME");
p.searchByName("BAN").forEach(function (p) { return p.show(); });
console.info("===== LIST PRODUCTS SEARCH BY PRICE");
p.searchByPrice(0, 100).forEach(function (p) { return p.show(); });
console.info("===== LIST PRODUCTS SORT BY PRICE");
p.sortByPrice();
p.show();
