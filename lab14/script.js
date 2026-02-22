class Product {
  constructor(name, price, category) {
    this.name = name;
    this.price = price;
    this.category = category;
  }
}

class User {
  constructor(name) {
    this.name = name;
  }

  getUserInfo() {
    return `Користувач: ${this.name}`;
  }
}

class Order {
  constructor(products = []) {
    this.products = products;
    this.totalAmount = this.calculateTotal();
  }

  calculateTotal() {
    return this.products.reduce((sum, product) => sum + product.price, 0);
  }
}

class Customer extends User {
  constructor(name) {
    super(name);
    this.orders = [];
  }

  addOrder(order) {
    this.orders.push(order);
  }

  viewOrders() {
    if (this.orders.length === 0) {
      console.log(`${this.name} ще не має замовлень.`);
      return;
    }

    console.log(`Замовлення покупця ${this.name}:`);
    this.orders.forEach((order, index) => {
      const productList = order.products.map(p => p.name).join(", ");
      console.log(`${index + 1}. Товари: [${productList}] | Сума: ${order.totalAmount} грн`);
    });
  }
}

const laptop = new Product("Ноутбук", 35000, "Електроніка");
const mouse = new Product("Мишка", 1200, "Аксесуари");
const phone = new Product("Смартфон", 22000, "Електроніка");

const customer = new Customer("Олександр");

console.log(customer.getUserInfo());

const order1 = new Order([laptop, mouse]);
const order2 = new Order([phone]);

customer.addOrder(order1);
customer.addOrder(order2);

customer.viewOrders();