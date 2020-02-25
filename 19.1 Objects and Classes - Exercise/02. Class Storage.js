class Storage {
    constructor(capacity) {
        this.capacity = Number(capacity),
            this.storage = [],
            this.totalCost = 0
    }
    addProduct(product) {
        if ((this.capacity + product.quantity) >= 0) {
            this.capacity -= Number(product.quantity);
            this.totalCost += product.price * product.quantity;
            this.storage.push({
                name: product.name,
                price: product.price,
                quantity: product.quantity
            });
        }
    }
    getProducts() {

        let output = Object.values(storage.storage)

        output.forEach(element => {
            console.log(JSON.stringify(element));
        });
    }
}

let productOne = {
    name: 'Cucamber',
    price: 1.50,
    quantity: 15
}
let productTwo = {
    name: 'Tomato',
    price: 0.90,
    quantity: 25
}
let productThree = {
    name: 'Bread',
    price: 1.10,
    quantity: 8
}
let storage = new Storage(50)
storage.addProduct(productOne)
storage.addProduct(productTwo)
storage.addProduct(productThree)
storage.getProducts()
console.log(storage.capacity);
console.log(storage.totalCost);