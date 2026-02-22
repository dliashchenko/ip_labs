function Product(name, price, category) {
    this.name = name;
    this.price = price;
    this.category = category;
}

Product.prototype.getInfo = function() {
    return `${this.name} [Категорія: ${this.category}] — ${this.price} грн`;
};

function Order() {
    this.products = [];
    this.totalAmount = 0;
}

Order.prototype.addProduct = function(product) {
    if (product instanceof Product) {
        this.products.push(product);
        this.totalAmount += product.price;
        console.log(`Товар "${product.name}" додано до замовлення.`);
    } else {
        console.log("Помилка: додавати можна лише об'єкти типу Product.");
    }
};

Order.prototype.getOrderDetails = function() {
    console.log(`\n--- Деталі замовлення ---`);
    this.products.forEach(product => {
        console.log(`  * ${product.getInfo()}`);
    });
    console.log(`  Загальна сума: ${this.totalAmount} грн`);
    console.log(`-------------------------`);
};

function Customer(name) {
    this.name = name;
    this.orders = [];
}

Customer.prototype.placeOrder = function(order) {
    if (order instanceof Order && order.products.length > 0) {
        this.orders.push(order);
        console.log(`\nЗамовлення успішно закріплено за клієнтом ${this.name}.`);
    }
};

Customer.prototype.viewOrders = function() {
    console.log(`\n========================================`);
    console.log(`Історія замовлень клієнта: ${this.name}`);
    console.log(`========================================`);
    
    if (this.orders.length === 0) {
        console.log("У цього клієнта ще немає оформлених замовлень.");
        return;
    }

    this.orders.forEach((order, index) => {
        console.log(`\nЗамовлення #${index + 1}:`);
        order.getOrderDetails();
    });
};

const laptop = new Product("Ноутбук Dell XPS", 45000, "Електроніка");
const mouse = new Product("Бездротова миша Logitech", 1200, "Електроніка");
const book = new Product("JavaScript: The Good Parts", 850, "Книги");

const order1 = new Order();
order1.addProduct(laptop);
order1.addProduct(mouse);

const order2 = new Order();
order2.addProduct(book);

const customer1 = new Customer("Олександр");

customer1.placeOrder(order1);
customer1.placeOrder(order2);

customer1.viewOrders();