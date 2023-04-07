// ----------------------------------------ПРИКЛАД ФУНКЦІЇ-КОНСТРУКТОРА --------------------------------------

// function User(name, age) {
//     //this = {}
//     // у функції-конструктора (класу) автоматично створюється return і у this записуэться пустий об'єкт.
//     //return this;
//     // this = { name, age }

//     this.name = name;
//     this.age = age;
//     this.status = 'active';

//     // this.sayHello = function () {
//     //     console.log(`Hello, I am ${this.name}`);
//     // } - так як це спільний метод для всіх нових об'єктів User, ми можемо винести його у прототип класу
    
// };

// // для того, щоб винести спільний метод sayHello у прототип ми пишемо:

// User.prototype.sayHello = function () {
//         console.log(`Hello, I am ${this.name}`);
//     }


// const Bob = new User('Bob', 30); // { name: 'Bob', age: 30 };
// // 1)  this = {} => {name: 'Bob"} => {name: 'Bob', age: 30} => {name: 'Bob', age: 30}  => return this
// // 2) const Bob ={name: 'Bob', age: 30}
// // 3) Bob.prototype = User.prototype
// // 4) Bob може користуватися методом SayHello()

// const Alice = new User('Alice', 25);
// const Mary = new User('Mary', 20);

// Bob.sayHello();
// Alice.sayHello();
// Mary.sayHello();

// // далі ми можемо створити іншу функцію конструктор на основі даних з попереднього об'єкту, передати User у якості аргументу у нову функцію

// function Student(user) {
//     this.user = user;
// }

// const student = new Student(Bob);


// ПРИКЛАД !!! СТВОРЕННЯ МЕТОДУ ДЛЯ ПРОТОТИПА КЛАСУ НА ПРИКЛАДІ МАСИВУ
// Кожен масив має індивідуальних властивостей, наприклад, index і length масиву, і пачку спільних методів map, find, reduce і т.д.
// якщо б ми описували створення методів для спільного користування у масиві, ми б зробили це так:

// function Array(...args) {
//     this.args = args;
//     this.length = args.length;
// }

// Array.prototype.map;
// Array.prototype.find;
// Array.prototype.reduce; // і так далі.

// --------------------------------------------ПЕРЕПИСУЄМО НА КЛАСИ - сучасний запис - підхід до організації коду ---------------------------

// class User {
//     constructor(name, age, status) {
//         this.name = name;
//         this.age = age;
//         this.status = 'active';
//     }

//     sayHello() {
//         console.log(`Hello, I am ${this.name}`);
//     }
// }

// const Alex = new User('Alex', 26, 'pending');
// Alex.sayHello();

// ----------------------------------------------------------------CLASS EXAMPLE------------------------

// class User {
//   // Объявление и инициализация статического свойства
// static Roles = {
//     ADMIN: "admin",
//     EDITOR: "editor",
//     STUDENT: "student",
//     MENTOR: "mentor",
//   };

//     // static getRole(user) {
//     //   return user.role;
//     // }

//   #email;
//   #role;

//   constructor({ email, role }) {
//     this.#email = email;
//     this.#role = role;
//   }

//   get role() {
//     return this.#role;
//   }

//   set role(newRole) {
//     this.#role = newRole;
//   }
// }

// const mango = new User({
//   email: "mango@mail.com",
//   role: User.Roles.ADMIN,
// });

// console.log(mango);
// // console.log(User.Roles);

// // console.log(mango.Roles); // undefined
// // console.log(User.Roles); // { ADMIN: "admin", EDITOR: "editor" }

// console.log(mango.role); // "admin"
// console.log(mango.email);
// mango.role = User.Roles.EDITOR;
// console.log(mango.role); // "editor"

// --------------------------------------------------------------CLASS EXAMPLE---------------------


// class User {
//   static #takenEmails = [];

//   static isEmailTaken(email) {
//     return User.#takenEmails.includes(email);
//   }

//   #email;

//   constructor({ email }) {
//     this.#email = email;
//     User.#takenEmails.push(email);
//   }
// }

// const mango = new User({ email: "mango@mail.com" });

// console.log(User.isEmailTaken("poly@mail.com")); // false
// console.log(User.isEmailTaken("mango@mail.com")); // true


// ## Example 4 - Заметки --------------------------------------------------------------------

// Напиши класс `Notes` который управляет коллекцией заметок в свойстве `items`.
// Заметка это объект со свойствами `text` и `priority`. Добавь классу статическое
// свойство `Priority`, в котором будет храниться объект с приоритетами.

// ```js
// {
//   LOW: 'low',
//   NORMAL: 'normal',
//   HIGH: 'high'
// }
// ```

// Добавь методы `addNote(note)`, `removeNote(text)` и
// `updatePriority(text, newPriority)`.

// class Notes {
//     static Priority = {
//         LOW: 'low',
//         NORMAL: 'normal',
//         HIGH: 'high',
//     }

//     constructor(items = []) {
//         this.items = items;
//     }
    
//     addItem(item) {
//         this.items.push(item);
//     }

//     removeItem(text) {
//       this.item = this.items.filter(item => item.text !== text); // filter() поверне новий масив з тими об'єктами, які потрібно залишити 
//     }

//     updatePriority(text, newPriority) {
//         this.items = this.items.map(item =>
//             item.text === text ? { ...item, priority: newPriority } : item
//         );
//     }
// }

// const myNotes = new Notes();
// console.log(myNotes);

// myNotes.addItem({ text: "my 1st task", priority: Notes.Priority.LOW });
// console.log(myNotes.items);

// myNotes.addItem({
//     text: 'my 2nd task',
//     priority: Notes.Priority.HIGH,
// });
// console.log(myNotes.items)

// myNotes.removeItem('my 2nd task');
// console.log(myNotes.items);

// myNotes.updatePriority({
//     text: "my 1st task",
//     priority: Notes.Priority.NORMAL,
// });
// console.log(myNotes.items);