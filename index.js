// Task 1
var array = [1, 4, 9, 16, 25]

console.log(array.filter(element => element % 2 == 0).reduce((sum, element) => sum + Math.sqrt(element), 0) );

// Task 2
var arraySecond = []
var firstValue = 3
var secondValue = 'a'

function arraySecondNew(firstValue, secondValue) {
    for(firstValue; firstValue > 0; firstValue--){
        arraySecond.push(secondValue)
    }
    return arraySecond
}

console.log(arraySecondNew(firstValue, secondValue));

// Task 3

var arrayThird = [1, 2, 3]
var arrayThirdNew = array => array.map((item, index, newArr) => newArr[newArr.length - 1 - index]);

console.log(arrayThirdNew(arrayThird));

// Task 4

var arrayFourth = [0, 1, false, 2, undefined, '', 3, null]

var arrayFourthNew = arrayFourth.filter(item => !(item==false) && !(item==undefined) && !(item=='') && !(item==0) && !(item==null))
console.log(arrayFourthNew);

// Task 5

var arrayFifth = [['a', 1], ['b', 2]]

var arrayFifthNew = array => {
    var obj = {};
    for(let i = 0; i < array.length; i++) {
        obj[array[i][0]] = array[i][1];
    }
    return obj;
};

console.log(arrayFifthNew(arrayFifth));

// Task 6

var arraySixth = [1, 2, 3, 1, 2]

var arraySixthNew = arraySixth.filter(function(el, id) {
    return arraySixth.indexOf(el) == id;
});

console.log(arraySixthNew);

// Task 7

var arraySeventh = [1, 2, 3]
var arraySeventhSame = [1, 2, 3]

var isEqual = (arraySeventh, secondArray) => {
    if ( !(arraySeventh.length == secondArray.length)) {
        return false;
    }

    var compared = arraySeventh.map((el, id) => arraySeventhSame[id] === el);
    return !compared.includes(false);
};

console.log(isEqual(arraySeventh, arraySeventhSame));

// Task 8

var arrayEighth = [1, 2, [3, 4, [5]]]

var arrayEigthNew = (array) => array.reduce((acc, item) => acc.concat(Array.isArray(item) ? arrayEigthNew(item) : item),[]);

console.log(arrayEigthNew(arrayEighth));

// Task 9

var arrayNingth = [1, 2, 3, 4, 5]
var size = 2
var arrayNingthNew = []

for (let i = 0; i<arrayNingth.length; i += size) {
    arrayNingthNew.push(arrayNingth.slice(i, i + size));
}

console.log(arrayNingthNew);

// Task 10

var str = "ПРИМЕР СТРОКИ";

function capitalizeFirstLetter(str) {
    return str[0].toLowerCase() + str.slice(1);
};

document.writeln(capitalizeFirstLetter(str));


