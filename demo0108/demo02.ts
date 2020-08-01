class Product {
    name: string
    price: number

    constructor (n:string, p:number) {
        this.name = n;
        this.price = p;
    }

    compareByPrice(p:Product):number {
        let p1 = this.price;
        let p2 = p.price;
        return p1 > p2 ? 1: (p1 < p2 ? -1 : 0);
    }

    show():void {
        console.info(`\t> Name: ${this.name}; Price: ${this.price}$`)
    }
}

class ProductManager {
    private products:Product[] = []

    addProduct(p:Product):void {
        this.products.push(p)
    }

    show():void {
        //for (let i = 0; i < this.products.length; i++) {
        //    this.products[i].show();
        //}
        this.products.forEach(p => {
            p.show();
        });
    }

    // Tim kiem
    searchByName(kw:string):Product[] {
        return this.products.filter(p => p.name.toLowerCase().indexOf(kw.toLowerCase()) >= 0)
    }

    searchByPrice(fromPrice:number, toPrice:number):Product[] {
        return this.products.filter(p => p.price >= fromPrice && p.price <= toPrice)
    }

    // sap xep
    sortByPrice(): void {
        this.products.sort((a:Product, b:Product) => a.compareByPrice(b))
        // sap xep giam theo don gia
        // this.products.sort((a:Product, b:Product) => -a.compareByPrice(b))
    }
}

let sp1 = new Product("BANG", 350)
let sp2 = new Product("Phan viet bang", 50)
let sp3 = new Product("Ban phim", 100)
let sp4 = new Product("Chuot", 80)

let p = new ProductManager();
p.addProduct(sp1);
p.addProduct(sp2);
p.addProduct(sp3);
p.addProduct(sp4);

console.info("===== ALL PRODUCTS")
p.show();

console.info("===== LIST PRODUCTS SEARCH BY NAME")
p.searchByName("BAN").forEach(p => p.show())

console.info("===== LIST PRODUCTS SEARCH BY PRICE")
p.searchByPrice(0, 100).forEach(p => p.show())

console.info("===== LIST PRODUCTS SORT BY PRICE")
p.sortByPrice()
p.show()

// TO COMPILE 'TS FILE' TO 'JS FILE': tsc fileName.ts (Ex: tsc demo0108/demo02.ts)
// TO RUN 'JS FILE': node fileName.js (Ex: node demo0108/demo02.js) 