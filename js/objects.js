// ## Example 1 - Основы обьектов

// Напиши скрипт, который, для объекта `user`, последовательно:

// - добавляет поле `mood` со значением `'happy'`
// - заменяет значение `hobby` на `'skydiving'`
// - заменяет значение `premium` на `false`
// - выводит содержимое объекта `user` в формате `ключ:значение` используя
//   `Object.keys()` и `for...of`

// ### Код

// ```js
// const user = {
//   name: 'Mango',
//   age: 20,
//   hobby: 'html',
//   premium: true,
// };

// user.mood = 'happy';
// user.hobby = 'skydiving';
// user.premium = 'false';

// const keys = Object.keys(user);
// for (const key of keys) {
//     console.log(`${key} : ${user[key]}`)
// }

// console.log(user)

// ```

// ## Example 2 - метод Object.values()

// У нас есть объект, в котором хранятся зарплаты нашей команды. Напишите код для
// суммирования всех зарплат и сохраните результат в переменной sum. Должно
// получиться 390. Если объект `salaries` пуст, то результат должен быть 0.

// ### Код

// ```js
// const salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130,
// };

// const salaries1 = {};


// function calcTotalSalary(salaries) {
//     const values = Object.values(salaries);

//     if (values.length === 0) {
//         return 0;
//     }

//     let total = 0;
//     for (const value of values) {
//         total += value;
//     }

//     return total;
// }
// console.log(calcTotalSalary(salaries))
// console.log(calcTotalSalary(salaries1))

// ---------------------- FOR IN

// let total = 0;

// for (const salary in salaries) {
//     total += salaries[salary];
// }

// console.log(total)

// ```

// ## Example 3 - Массив объектов

// Напишите ф-цию `calcTotalPrice(stones, stoneName)`, которая принимает массив
// обьектов и строку с названием камня. Ф-ция считает и возвращает общую стоимость
// камней с таким именем, ценой и количеством из обьекта

// ### Код

// ```js
// const stones = [
//   { name: 'Изумруд', price: 1300, quantity: 4 },
//   { name: 'Бриллиант', price: 2700, quantity: 3 },
//   { name: 'Сапфир', price: 400, quantity: 7 },
//   { name: 'Щебень', price: 200, quantity: 2 },
// ];

// function calcTotalPrice(stones, stoneName) {
//     let totalPrice = 0;

//     for (const stone of stones) {
//         if (stone.name === stoneName) {
//             totalPrice = stone.price * stone.quantity;
//         }
//     }
//     return totalPrice;
// }

// console.log(calcTotalPrice(stones, 'Сапфир'))

// ```

// ## Example 4 - Комплексные задачи

// Напиши скрипт управления личным кабинетом интернет банка. Есть объект `account`
// в котором необходимо реализовать методы для работы с балансом и историей
// транзакций.

// ```js
// /*
//  * Типов транзацкий всего два.
//  * Можно положить либо снять деньги со счета.
//  */
const TRANSACTION = {
  DEPOSIT: 'deposit',
  WITHDRAW: 'withdraw',
};

// /*
//  * Каждая транзакция это объект со свойствами: id, type и amount
//  */

const account = {
  // Текущий баланс счета
  balance: 0,

  // История транзакций
  transactions: [],

  /*
   * Метод создает и возвращает объект транзакции.
   * Принимает сумму и тип транзакции.
   */
    createTransaction(amount, type) {
        return {
            amount,
            type,
            id: this.transactions.length,
      }
  },

  /*
   * Метод отвечающий за добавление суммы к балансу.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций
   */
    deposit(amount) {
        this.balance += amount;
        const transaction = this.createTransaction(amount, TRANSACTION.DEPOSIT);
        console.log(transaction);
        this.transactions.push(transaction);
        console.log(this.transactions);
  },

  /*
   * Метод отвечающий за снятие суммы с баланса.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций.
   *
   * Если amount больше чем текущий баланс, выводи сообщение
   * о том, что снятие такой суммы не возможно, недостаточно средств.
   */
    withdraw(amount) {
         if (amount > this.balance) {
            return 'There is not enoght money'
        }
        
        this.balance -= amount;
        const transaction = this.createTransaction(amount, TRANSACTION.WITHDRAW);
        this.transactions.push(transaction);
  },

  /*
   * Метод возвращает текущий баланс
   */
    getBalance() {
      return this.balance
  },

  /*
   * Метод ищет и возвращает объект транзации по id
   */
    getTransactionDetails(id) {
        for (const trans of this.transactions) {
            if (trans.id === id) {
                return trans;
          }
      }
  },

  /*
   * Метод возвращает количество средств
   * определенного типа транзакции из всей истории транзакций
   */
    getTransactionTotal(type) {
        let total = 0;

        for (const trans of this.transactions) {
            if (trans.type === type) {
                total += trans.amount;
          }
        }
        return total;
  },
};
// ```

console.log(account.getBalance());
account.deposit(150);
account.deposit(350);
account.deposit(250);
account.deposit(450);
account.withdraw(50);
account.withdraw(250);
account.withdraw(150);
account.withdraw(50);
console.log(account.getBalance());
console.log(account.transactions);
console.log(account.getTransactionDetails(5));
console.log(account.getTransactionTotal(TRANSACTION.DEPOSIT));
console.log(account.getTransactionTotal(TRANSACTION.WITHDRAW));
