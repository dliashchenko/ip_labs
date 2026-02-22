export class Order {
  constructor(products = []) {
    this.products = products;
    this.totalAmount = this.calculateTotal();
  }

  calculateTotal() {
    return this.products.reduce((sum, product) => sum + product.price, 0);
  }
}