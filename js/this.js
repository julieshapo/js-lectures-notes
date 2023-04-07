// function showThis() {
//     console.log(this);
// }

// const user = {
//     name: 'Bob',
//     age: 30,
// }

// // showThis() // window (in default, non-strict mode) and undefined (in strict mode)

// const bindShowThis = showThis.bind(user); // прив'язує до контексту
// bindShowThis();


// МЕТОД BIND НАПИСАНИЙ РУКАМИ

// const somePeople = {
//     name: 'Alex',
//     age: 36,
// }

// function helloMyFriend(args) {
//     console.log(`hello, ${this.name} + args`);
// };

// const myBind = function (fn) {
//     const context = this;
//     return function (...args) {
//         return fn.apply(context, args);
//     };
// };

// Object.prototype.myBinsProto = myBind;

// const testMySelfBind = somePeople.myBinsProto(helloMyFriend);
// testMySelfBind(", my dear friend");



// #1---------------------------------------------------

// const chopShop = {
//     stones: [
//         { name: "Emerald", price: 1300, quantity: 4 },
//         { name: "Diamond", price: 2700, quantity: 3 },
//         { name: "Sapphire", price: 1400, quantity: 7 },
//         { name: "Ruby", price: 800, quantity: 2 },
//     ],

//     calcTotalPrice(stoneName) {
//         const stone = this.stones.find(({ name }) => name === stoneName);
//         return stone.price * stone.quantity;
//      },
// }

// console.log(chopShop.calcTotalPrice("Emerald")); // 5200
// console.log(chopShop.calcTotalPrice("Diamond")); // 8100
// console.log(chopShop.calcTotalPrice("Sapphire")); // 9800
// console.log(chopShop.calcTotalPrice("Ruby")); // 1600

// #2 ----------------------------------------------------------

// // Выполните рефакторинг методов объекта `phonebook` чтобы код заработал.

// ```js
// const phonebook = {
//   contacts: [],
//   add(contact) {
//     const newContact = {
//       list: "default",
//       ...contact,
//       id: this.generateId(),
//       createdAt: this.getDate(),
//     };
//     this.contacts.push(newContact);
//   },
//   generateId() {
//     return "_" + Math.random().toString(36).substr(2, 9);
//   },
//   getDate() {
//     return Date.now();
//   },
// };

// console.log(
//   phonebook.add({
//     name: "Mango",
//     email: "mango@mail.com",
//     list: "friends",
//   })
// );
// console.log(
//   phonebook.add({
//     name: "Poly",
//     email: "poly@hotmail.com",
//   })
// );

// console.log(phonebook.contacts);
// ```

// // ## Example 3 - Калькулятор

// Создайте объект `calculator` с тремя методами:

// - `read(a, b)`- принимает два значения и сохраняет их как свойства объекта.
// - `add()` - возвращает сумму сохранённых значений.
// - `mult()` - перемножает сохранённые значения и возвращает результат.


// // 1) Якщо метод приймає два аргументи:
// const calculator = {

//     read(a, b) {
//         this.a = a; // створює новий ключ а в об'єкті калькулятору
//         this.b = b; // створює новий ключ b в об'єкті калькулятору
//     },

// // і тепер ми мижемо до них звертатися у методі об'єкту add i multiply
    
//     add() {
//         return this.a + this.b;
//     },

//     multiply() {
//         return this.a * this.b;
//     },
// }

// calculator.read(5, 4);
// console.log(calculator)
// calculator.add();
// console.log(calculator.add());
// calculator.multiply();
// console.log(calculator.multiply());


// // 2) Якщо метод приймає багато аргументів:
// const calculatorMany = {

//     read(...args) {
//         this.numbers = args;
//     },

//     add() {
//         return this.numbers.reduce( (acc, number) => acc + number, 0 );
//     },

//     multiply() {
//         return this.numbers.reduce( (acc, number) => acc * number, 1 );
//     },
// }

// calculatorMany.read(5, 4, 7, 9, 23, 45, 3);
// console.log(calculatorMany)
// calculatorMany.add()
// console.log(calculatorMany.add())
// calculatorMany.multiply();
// console.log(calculatorMany.multiply())

