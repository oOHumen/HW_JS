// 2я домашка по JS со звездочками:

// 1. Написать скриптик, который сосчитает и выведет результат от возведения 2 в степень 10, начиная со степени 1
// let int = 2;
// let degree = 1;
// while (degree <= 10) {
//     res = int ** degree;
//     degree++;
//     console.log(res);
// }


// 1*. Преобразовать 1 задачу в функцию, принимающую на вход степень, в которую будет возводиться число 2

// function upToDegree(degree) {
//     res = 2 ** degree;
//     console.log(res);
// }

// upToDegree(4);

// 2. Написать скрипт, который выведет 5 строк в консоль таким образом, чтобы в первой строчке выводилось :), во второй :):) и так далее
// Пример в консоли:
// :)
// :):)
// :):):)
// :):):):)
// :):):):):)

// let str = ":)";
// for (let i = 0; i < 5; i++) {
//     console.log(str);
//     str = str + ":)";
// }

// 2*. Преобразовать 2 задачу в функцию, принимающую на вход строку, которая и будет выводиться в консоль (как в условии смайлик), а также количество строк для вывода 
// e.g. function printSmile(stroka, numberOfRows)

// function printSmile(str, numOfStr) {
//     let res = "";
//     for (let i = 0; i <= numOfStr; i++) {
//         console.log(res);
//         res = str + res;
//     }
// }
// printSmile(":) ", 5);

// 3**.  Написать функцию, которая принимает на вход слово. Задача функции посчитать и вывести в консоль, сколько в слове гласных, и сколько согласных букв.
// e.g. function getWordStructure(word)
// В консоли: 
// Слово (word) состоит из  (число) гласных и (число) согласных букв

/*
function getWordStructure(word) {
    const vovelsRe = /[aeiouy]/gi;
    const consonantsRe = /[bcdfghjklmnpqrstvwxyz]/gi;
    let countOfVowels = word.match(vovelsRe).length;
    let countOfConsonants = word.match(consonantsRe).length;
    console.log(`Слово ${word} состоит из ${countOfVowels} гласных и ${countOfConsonants} согласных букв`);
}
*/

/*
const getWordStructureFunctionInOneString = (word) => {
    console.log(`Слово ${word} состоит из ${word.match(/[aeiouy]/gi).length} гласных и ${word.match(/[bcdfghjklmnpqrstvwxyz]/gi).length} согласных букв`);
}
getWordStructureFunctionInOneString("internationalization");
*/

// Проверки: 'case', 'Case', 'Check-list'

// getWordStructure("internationalization");
// getWordStructure("localization");
// getWordStructure("globalization");
// getWordStructure("ToLoverCase");
// getWordStructure("case");
// getWordStructure("Case");
// getWordStructure("Check-list");


// 4**. Написать функцию, которая проверяет, является ли слово палиндромом
// e.g. function isPalindrom(word)

function isPalindrom(word) {
    word = word.toLowerCase();
    let first = word.split(' ').join('');
    let second = first.split('').reverse().join('');
    if (first === second) {
        console.log(`The "${word}" is palindrome`);
    } else {
        console.log(`The "${word}" is not palindrome`);
    }
}

isPalindrom("Me non em");
isPalindrom("Abba");
isPalindrom("abba");
isPalindrom("12321");
isPalindrom("12345");
isPalindrom("1 2 3 4 3 2 1");

// Проверки: 'abba', 'Abba'