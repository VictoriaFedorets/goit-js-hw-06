class Storage {
  #items;

  constructor(params) {
    this.#items = params;
  }

  getItems() {
    return this.#items;
  }

  addItem(newItem) {
    this.#items.push(newItem);
  }

  removeItem(itemToRemove) {
    const itemIndex = this.#items.indexOf(itemToRemove);
    if (itemIndex > -1) {
      this.#items.splice(itemIndex, 1);
    }
  }
}

const storage = new Storage(['Nanitoids', 'Prolonger', 'Antigravitator']);
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]

storage.addItem('Droid');
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]

storage.removeItem('Prolonger');
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]

storage.removeItem('Scaner');
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]

// Створи клас Storage, який створюватиме об'єкти для управління складом товарів. Клас очікує лише один аргумент — початковий масив товарів, який записується до створеного об'єкта в приватну властивість items.

// Оголоси наступні методи класу:

// getItems() — повертає масив поточних товарів у приватній властивості items.
// addItem(newItem) — приймає новий товар newItem і додає його до масиву товарів у приватну властивість items об'єкта.
// removeItem(itemToRemove) — приймає рядок з назвою товару itemToRemove і видаляє його з масиву товарів у приватній властивості items об'єкта.

// На що буде звертати увагу ментор при перевірці:

// Оголошений клас Storage
// У класі Storage оголошений метод getItems
// У класі Storage оголошений метод addItem
// У класі Storage оголошений метод removeItem
// Властивість items у класі Storage оголошена приватною
// Метод getItems повертає значення приватної властивості items екземпляра класу, який його викликає
// Метод addItem змінює значення приватної властивості items екземпляра класу, який його викликає
// Метод removeItem змінює значення приватної властивості items екземпляра класу, який його викликає
// У результаті виклику new Storage(["Nanitoids", "Prolonger", "Antigravitator"]) значення змінної storage — це об'єкт
// У об’єкта storage немає публічної властивості items
