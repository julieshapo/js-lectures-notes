
//  Вивести в консоль числа від 1 до 10, які кратні 2

// for (let i = 1; i < 10; i += 1) {
//     if (i % 2 !== 0) {
//         continue;
//     }
//     console.log(i);
// }

// ## Example 1 - Ввод пользователя и ветвления

// Используя конструкцию if..else и prompt, напиши код, который будет спрашивать:
// `"Какое официальное название JavaScript?"`. Если пользователь вводит
// `ECMAScript`, то показывай alert со строкой `"Верно!"`, в противном случае -
// `"Не знаете? ECMAScript!"`

// const userReply = prompt(`"Какое официальное название JavaScript?"`)
//     if(userReply === `ECMAScript`) {
//     alert(`"Верно!"`)
// }
//     alert(`"Не знаете? ECMAScript!"`)

// ## Example 2 - Отображение времени (if...else)

// Напиши скрипт для отображения часов и минут в консоли браузера в виде строки
// формата `"14 ч. 26 мин."`. Если значение переменной `minutes` равно `0`, то
// выводи строку `"14 ч."`, без минут.

// const hours = 14;
// const minutes = 26;
// let timeString = '';

// if (minutes === 0) {
//     timeString = `${hours} год.`;
// } else
//     timeString = `${hours} год. ${minutes} хв.`


    // Конвертація

// const minutes = 74;
// const minutes = 456;

// const minutesValue = minutes % 60;
// const hours = Math.floor(minutes / 60);
// console.log(`${hours} hours : ${minutesValue} minutes`)


// ## Example 8 - Цикл for

// Напиши цикл for который выводит в консоль браузера числа по возрастанию от `min`
// до `max`, но только если число кратное `5`.

// const max = 100;
// const min = 20;

// ----------------FOR

// for (let i = min; i <= max; i += 1) {
//     if (i % 5 === 0) {
//         console.log(i);
//     }
// }

// ---------------WHILE

// let i = min;

// while (i <= max) {
//     if (i % 5 === 0) {
//         console.log(i)
//     }
//     i += 1;
// }

// -------------DO WHILE

// const password = 'admin';
// let userPassword;

// do {
//     userPassword = prompt('Enter your password')
//     console.log(userPassword)
// } while (userPassword !== password)

// ------------------------------------------- ВИБІР ЖАНРУ МУЗИКИ
            // function howMany(selectObject) {
            //     let numberSelected = 0;
            //     for (let i = 0; i < selectObject.options.length; i++) {
            //         if (selectObject.options[i].selected) {
            //             numberSelected++;
            //         }
            //     }
            //     return numberSelected;
            // }

            // const btn = document.getElementById('btn');
            // btn.addEventListener('click', function () {
            //     alert('Выбрано элементов: ' + howMany(document.selectForm.musicTypes));
            // });



// ## Example 3 - Ветвеления

// Напиши скрипт, который выводит в консоль строку `"Это положительное число"`,
// если в prompt пользователь ввел число больше нуля. Если был введен ноль, выводи
// в консоль строку `"Это ноль"`. Если передали отрицательное число, в консоли
// должна быть строка `"Это отрицательное число"`.

// const userNumber = prompt('Enter your number')

// if (userNumber > 0) {
//     alert(`"Это положительное число"`)
// } else if (userNumber < 0) {
//     alert(`"Это отрицательное число"`)
// } else if (userNumber === ''){
//     alert('Error: enter your number')
// } else alert(`"Это ноль"`)

// switch (true) {
//     case userNumber > 0:
//         alert(`"Это положительное число"`)
//         break;
//     case userNumber < 0:
//         alert(`"Это отрицательное число"`)
//         break;
//     case userNumber === '':
//         alert(`"Error: enter your number"`)
//         break;
//     default:
//         alert('Это ноль')
//         break;
// }


// ## Example 4 - Вложенные ветвления

// Напиши скрипт, который сравнивает числа в переменных `a` и `b`. Если оба
// значения больше `100`, то выведи в консоль максимальное из них. В противном
// случае в консоли должна быть сумма значения `b` и числа 512.

// ```js
// const a = 120;
// const b = 180;
// ```


// ## Example 5 - if...else и логические операторы

// Напиши скрипт который будет выводить в консоль браузера строку в зависимости от
// значения переменной `hours`.

// Если значение переменной `hours`:

// - меньше `17`, выводи строку `"Pending"`
// - больше либо равно `17` и меньше либо равно 24, выводи строку `"Expires"`
// - больше `24` , выводи строку `"Overdue"`

// ```js
// const hours = prompt("Enter hours");
// ```

// if (hours < 17) {
//     console.log(`"Pending"`)
// } else if (hours >= 17 && hours <= 24) {
//     console.log(`"Expires"`)
// } else if (hours > 24) {
//     console.log(`"Overdue"`)
// }


// switch (true) {
//     case hours < 17:
//         console.log(`"Pending"`)
//         break;
//     case hours >= 17 && hours <= 24:
//         console.log(`"Expires"`)
//         break;
//     case hours > 24:
//         console.log(`"Overdue"`)
//         break;
//     default:
//         break;
// }

// ## Example 6 - Дедлайн сдачи проекта (if...else or switch)

// Напиши скрипт для отображения времени дедлайна сдачи проекта. Используй
// конструкцию `if...else` or 'switch'.

// - Eсли до дедлайна 0 дней - выведи строку `"Сегодня"`
// - Eсли до дедлайна 1 день - выведи строку `"Завтра"`
// - Eсли до дедлайна 2 дня - выведи строку `"Послезавтра"`
// - Eсли до дедлайна 3+ дней - выведи строку `"Дата в будущем"`

// ```js
// const daysUntilDeadline = 5;
// // Пиши код ниже этой строки
// ```
// switch (true) {
//     case daysUntilDeadline === 0:
//         console.log(`"Сегодня"`)
//         break;
//     case daysUntilDeadline === 1:
//         console.log(`"Завтра"`)
//         break;
//     case daysUntilDeadline === 2:
//         console.log(`"Послезавтра"`)
//         break;
//     case daysUntilDeadline >= 3:
//         console.log(`"Дата в будущем"`)
//         break;
//     default:
//         break;
// }
 

// ## Example 9 - Ввод пользователя и ветвления

// Напиши скрипт, который будет спрашивать логин с помощью `prompt` и логировать
// результат в консоль браузера.

// - Если посетитель вводит `"Админ"`, то `prompt` запрашивает пароль
// - Если ничего не введено или нажата клавиша Esc - вывести строку `"Отменено"`
// - В противном случае вывести строку `"Я вас не знаю"`

// Пароль проверять так:

// - Если введён пароль `админ`, то вывести строку `"Здравствуйте!"`
// - Иначе выводить строку `"Неверный пароль"`

// const login = prompt("Enter your login");
// let userPassword = '';

// if (login === `Админ`) {
//     userPassword = prompt("Enter your password");
//         if (userPassword === `админ` ) {
//             alert(`"Здравствуйте!"`);
//         }
//             else alert(`"Неверный пароль"`);
// } else if (login === '' || `Esc`) {
//     alert(`"Отменено"`);
// } else alert(`"Я вас не знаю"`)

// ## Example 10

// let cost = 0;
// const subscription = "pro";

// if (subscription === "pro") {
//   cost = 100;
// }

// console.log(cost); // 100

// ## Example 11

// let cost;
// const subscription = "premium";

// if (subscription === "free") {
//   cost = 0;
// } else if (subscription === "pro") {
//   cost = 100;
// } else if (subscription === "premium") {
//   cost = 500;
// } else {
//   console.log("Invalid subscription type");
// }

// console.log(cost); // 500

// ## Example 12

// let type;
// const age = 20;

// if (age >= 18) {
//   type = "adult";
// } else {
//   type = "child";
// }

// console.log(type); // "adult"

// const age = 20;
// const type = age >= 18 ? "adult" : "child";
// console.log(type); // "adult"

// ## Example 13

// const num1 = 5;
// const num2 = 10;
// let biggerNumber;

// if (num1 > num2) {
//   biggerNumber = num1;
// } else {
//   biggerNumber = num2;
// }

// console.log(biggerNumber); // 10

// const num1 = 5;
// const num2 = 10;
// const biggerNumber = num1 > num2 ? num1 : num2;

// console.log(biggerNumber); // 10

// ______________________## Example 4 - Вложенные ветвления

// Напиши скрипт, который сравнивает числа в переменных `a` и `b`. Если оба
// значения больше `100`, то выведи в консоль максимальное из них. В противном
// случае в консоли должна быть сумма значения `b` и числа 512.


// const a = 20;
// const b = 180;
// const c = 512;

// if (a > 100 && b > 100) {
//     let biggerNumber = a > b ? a : b;
//     console.log(biggerNumber)
// } else console.log(b + c);


// ## Example 14

// let cost;
// const subscription = "premium";

// switch (subscription) {
//   case "free":
//     cost = 0;
//     break;

//   case "pro":
//     cost = 100;
//     break;

//   case "premium":
//     cost = 500;
//     break;

//   default:
//     console.log("Invalid subscription type");
// }

// console.log(cost); // 500

// ## Example 15

// let counter = 0;

// while (counter < 10) {
//   console.log("counter: ", counter);
//   counter += 1;
// }

// ## Example 16

// let clientCounter = 18;
// const maxClients = 25;

// while (clientCounter < maxClients) {
//   console.log(clientCounter);
//   clientCounter += 1;
// }

// ## Example 17

// let password = "";

// do {
//   password = prompt("Введіть пароль довший 4-х символів", "");
// } while (password.length < 5);

// console.log("Ввели пароль: ", password);

