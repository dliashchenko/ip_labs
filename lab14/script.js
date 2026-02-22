import { Product } from './models/Product.js';
import { Order } from './models/Order.js';
import { Customer } from './models/Customer.js';

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