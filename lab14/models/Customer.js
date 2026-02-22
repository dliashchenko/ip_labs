import { User } from './User.js';

export class Customer extends User {
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