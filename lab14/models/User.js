export class User {
  constructor(name) {
    this.name = name;
  }

  getUserInfo() {
    return `Користувач: ${this.name}`;
  }
}