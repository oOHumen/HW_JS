// HW_1* 
// Задания с разным количеством звездочек:)
// 1*:
// Преобразовать написанный код в 26-33 пунктах в функцию, принимающую на вход возраст.
// Пример: const checkAge = function(age) {
// Ваши преобразования
// }
// Вывести в консоль результат работы функции с возрастами 17, 18, 61

// const checkAge = function (age) {
//     let age_2 = 18;
//     let age_3 = 60;
//     if (age < age_2) {
//         console.log("You don't have access cause your age is " + age + " It's less then")
//     } else if (age >= age_2 && age < age_3) {
//         console.log("Welcome!");
//     } else if (age > age_3) {
//         console.log("Keep calm and look Culture channel");
//     } else {
//         console.log("Technical work");
//     }
// }
// checkAge(60);

// 2*:
// Преобразовать задание 1* таким образом, чтобы первым делом в функции проверялся тип данных. И если он не Number - кидалась ошибка.

// const checkAge = function (age) {
//     let age_2 = 18;
//     let age_3 = 60;
//     if (!Number(age)) {
//         console.log("The age is not a number");
//     } else if (age < age_2) {
//         console.log("You don't have access cause your age is " + age + " It's less then");
//     } else if (age >= age_2 && age < age_3) {
//         console.log("Welcome!");
//     } else if (age > age_3) {
//         console.log("Keep calm and look Culture channel");
//     } else {
//         console.log("Technical work ");
//     }
// }

// checkAge("hello");

// 3**:
// Преобразовать 2* таким образом, чтобы значение '2' (строка в которой лежит ТОЛЬКО ЦИФРА) пропускалось, преобразовываясь в number

// const checkAge = function (age) {
//     age = +age;
//     let age_2 = 18;
//     let age_3 = 60;
//     if (!Number(age)) {
//         console.log("The age is not a number");
//     } else if (age < age_2) {
//         console.log("You don't have access cause your age is " + age + " It's less then");
//     } else if (age >= age_2 && age < age_3) {
//         console.log("Welcome!");
//     } else if (age > age_3) {
//         console.log("Keep calm and look Culture channel");
//     } else {
//         console.log("Technical work");
//     }
// }

// checkAge("hello");


// 4***:
// Преобразовать задание 3* таким образом, чтобы возраст вводится используя функцию prompt в привязанной верстке

const checkAge = function (age) {
    age = +age;
    let age_2 = 18;
    let age_3 = 60;
    if (!Number(age)) {
        alert("The age is not a number");
    } else if (age < age_2) {
        alert("You don't have access cause your age is " + age + " It's less then");
    } else if (age >= age_2 && age < age_3) {
        alert("Welcome!");
    } else if (age > age_3) {
        alert("Keep calm and look Culture channel");
    } else {
        alert("Technical work");
    }
}

checkAge(prompt("Enter your age: "));