//------------------ № 1 ----------------------функція без return

// const numbersArray = [];

// function addNumbers(array) {
//     const number = prompt('Enter number');
//     array.push(number);
// }

// addNumbers(numbersArray);

// console.log(numbersArray)

// -------------- #2 -------------------with return

// function roomSpaceCalc(width, height) {
//     return width * height;
// }

// const sittingRoom = roomSpaceCalc(6, 13);
// const kitchen = roomSpaceCalc(3, 5);
// const bedroom = roomSpaceCalc(2, 4);

// console.log(sittingRoom)

// ---------------#3 -----------------Arguments

// Аргументи (псевдомасиви - не мають методів звичайних масивів) використовуються, коли невідомо, яка кількість аругментів буде передана в функцію,
// тому при створенні функції дужки з параментри залишаються пустими.

// function showArgument() {
//     console.log(arguments)
// }

// showArgument(1);
// showArgument(1, 2, 3, 4, 5);

// ------------------------№4 -------------Індекс маси тіла

// Алгоритм:
// 1. запитати в користувача вагу - prompt()
// 2. запитати зріст - prompt()
// 3. порахувати індекс маси тіла по формулі - поділити вагу на квадрат висоти людини  - Math
// 4. на основі формули показати показники користувачу - if else

// VOL ## 1

// function calcBmi() {
//     const weight= prompt('Enter your weight in kilo')
//     const height = prompt('Enter your height in meters')

//     const bmi = weight / Math.pow(height, 2);
    
//     if (bmi < 18.5) {
//         alert('too low')
//     } else if
//         (bmi >= 18.5 && bmi < 24.9) {
//         alert('norma')
//     } else {
//         alert('it`s too much')
//     }
// }

// calcBmi();

// VOL ## 2

// function collectUserInfo() {
//     const weight= prompt('Enter your weight in kilo')
//     const height = prompt('Enter your height in meters')

//     return [weight, height];
// }

// function getBmi(array) {
//     // return array[0] / Math.pow(array[1], 2);

//     const weight = array[0];
//     const height = array[1];

//     return weight / Math.pow(height, 2);
// }

// function showResult(bmi) {

//     switch (true) {
//         case bmi < 18.5:
//             alert('too low')
//             break;
//         case bmi >= 18.5 && bmi < 24.9:
//             alert('norma')
//             break;
//         default:
//             alert('it`s too much')
//             break;
//     }
// }

// function calcBmi() {
//     const userInfo = collectUserInfo();
//     const userResult = getBmi(userInfo)
//     showResult(userResult)
   
// }

// calcBmi();

// ----------------------#5 -----------FIND LARGEST NUMBER IN ARRAY

// function findLargestNumber(numbers) {
//     let largestNumber = numbers[0];
//     for (let number of numbers) {
//         if (number > largestNumber) {
//             largestNumber = number;
//         }
//     }
//     return largestNumber;
// }

// console.log(findLargestNumber([1, 5, 36, 90, 34, 10]))
// console.log(findLargestNumber([6,15,3,94,46,12]))

// ---------------------#6 ------------------CALCULATE AVERAGE

// function calcAverage() {}


// console.log(calcAverage(1, 2, 3, 4, 5))
// console.log(calcAverage(14, 8, 12))
// console.log(calcAverage(12, 57, 3, 18))


// -------------------------#7----------------


// function nbYear(p0, percent, aug, p) {
//     let n = 0;
//     while (p0 < p) {
//         p0 += p0 * percent / 100 + aug;
//         n += 1;
//     }
//     return n;
// }

// console.log(nbYear(1000, 2, 50, 1200))
// console.log(nbYear(1500, 5, 100, 5000))


// --------------------#8 ------------------

// function minMax(arr){
  
// const minMaxArr = [Math.min(...arr), Math.max(...arr)]
 
//     return minMaxArr
    
// }

// minMax([1, 2, 3, 4, 5])
// console.log(minMax([1, 2, 3, 4, 5]))


// ----------------#9---------------------- TO How Can Mirrors Be Real If Our Eyes Aren't Real

// const str = "How can mirrors be real if our eyes aren't real";

// function toJadenCase(str) {
    
//     const newStr = str.toLowerCase().split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    
//     return newStr;
// };

// console.log(toJadenCase(str))


// -------------------------#10 --------------------TOTAL NUM IN ARRAY

// function calculateTotalPrice(items) {
//     console.log(items);

//     let total = 0;

//     for (let item of items) {
//         total += item;
//     }
//     return total;
// }

// const r1 = calculateTotalPrice([1, 2, 3])

// console.log(r1)
// console.log(calculateTotalPrice([15, 23, 36, 49, 84]))
// console.log(calculateTotalPrice([11, 2, 34, 98, 36]))

// -----------------------#11 ----------------------
// напиши функцію logItems(items)для перебору і логірування масиву

// function logItems(items) {
//     for (let item of items) {
//         console.log(item)
//     }
// }

// logItems([1, 2, 3, 4, 5]);
// logItems(['Poly', 'Mango', 'Ajax'])
// logItems(['lion', 'horse', 'elephant', 'monkey', 'swan'])

// -----------------------#12 --------------------------ANIMAL TO FIND IN ARRAY

// const animals = ['lion', 'horse', 'elephant', 'monkey', 'swan']

// function findAnimal(allAnimals, animalToFind) {
//     console.log(allAnimals);
    
//     for (const animal of allAnimals) {
//         if (animal === animalToFind)
//             return `We found animal ${animalToFind}`
//     }
//     return `There is no animal ${animalToFind} within the animals`
// }

// console.log(findAnimal(animals, 'horse'));
// console.log(findAnimal(animals, 'lion'));
// console.log(findAnimal(animals, 'swan'));
// console.log(findAnimal(animals, 'elephant'));
// console.log(findAnimal(animals, 'dog'));

// =======================#13--------------------------- FUNCTION CHANGE CASE

// function changeCase(string) {
//     const letters = string.split(' ');
//     let invertedString = '';

//     for (let letter of letters) {
//         if (letter === letter.toLowerCase()) {
//             letter = letter.toUpperCase()
//         } else if (letter === letter.toUpperCase()) {
//             letter = letter.toLowerCase()
//         }
//         invertedString += letter;
//     }
    
//     return invertedString;
// }


// console.log(changeCase('QweRTy'));
// console.log(changeCase('AmaZONka'));

// -----------------------------------#14----------------------------REST

// function fn(...args) {
    
//     // console.log(arguments) // псевдомасив arguments
    
//     // for (const arg of arguments) {
//     //     console.log(arg)
//     // } // можна перебрати в циклі, але немає методів масивів (pop, push, etc...)

//     // const args = Array.from(arguments) // отримаємо справжній масив, на якому будуть всі методи
//     // console.log(args) // - але це застарівший синтаксис, тому використовують операцію REST (...args)
    
//     console.log(args)

// }

// fn(1, 2, 3, 4)
// fn(1, 2, 3, 4, 5, 6, 7)
// fn(1, 2, 3, 4, 5, 6, 7, 8, 9)


// ЯКЩО В АРГУМЕНТАХ ПОТРІНО ПЕРШІ АРГУМЕНТИ ОТРИМАТИ ОКРЕМО================================================

// function fn1(a, b, c, ...args) {
//     console.log(`${a}, ${b}, ${c}`)
//     console.log(args);
// }

// fn1('hello', 1, 2, 3, 4)
// fn1('hi', 1, 2, 3, 4, 5, 6, 7)
// fn1('buy', 1, 2, 3, 4, 5, 6, 7, 8, 9)


// ======================================FUNCTION ADD

// function add(...args) {
//     console.log(args)
//     let total = 0;

//     for (let arg of args) {
//         total += arg;
//     }

//     return total;
// }

// console.log(add(1, 2, 3, 4, 5))
// console.log(add(3, 6, 9, 12, 15, 18, 21, 24, 27))




