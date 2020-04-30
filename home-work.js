'use strict'

let $title1 = document.createElement('h1')
$title1.innerHTML = 'Задание 1.1'
$title1.style = 'color: #666; font-size: 20px; margin: 15px 0 0 0'
document.body.append($title1)

let $task1 = document.createElement('div')
$task1.classList.add('task1')
$task1.innerHTML = '<input placeholder="Как тебя зовут?" type="text"></input><button>Имя пользователя</button>'

let $task1Result = document.createElement('div')
$task1Result.classList.add('result')
$task1.append($task1Result)

document.body.append($task1)
let $task1Btn = document.querySelector('.task1 button')
let $task1Field = document.querySelector('.task1 input')
$task1Result = document.querySelector('.task1 .result')


let getResult1 = () => {
    $task1Result.innerHTML = `Привет, ` + $task1Field.value
}

$task1Btn.onclick = getResult1

////////////////////////////////////

let $title2 = document.createElement('h1')
$title2.innerHTML = 'Задание 1.2'
$title2.style = 'color: #666; font-size: 20px; margin: 15px 0 0 0'
document.body.append($title2)

let $task2 = document.createElement('div')
$task2.classList.add('task2')
$task2.innerHTML = '<input placeholder="В каком году вы родились?" type="number"></input><button>Узнать свой возраст</button>'

let $task2Result = document.createElement('div')
$task2Result.classList.add('result')
$task2.append($task2Result)

document.body.append($task2)
let $task2Btn = document.querySelector('.task2 button')
let $task2Field = document.querySelector('.task2 input')
$task2Result = document.querySelector('.task2 .result')


let getResult2 = () => {
    const currentYear = 2020
    let number = $task2Field.value
    let userYearOld = currentYear - number
    $task2Result.innerHTML = `Вам  ${userYearOld} лет`
}

$task2Btn.onclick = getResult2

///////////////////////////////////////

let $title3 = document.createElement('h1')
$title3.innerHTML = 'Задание 1.3'
$title3.style = 'color: #666; font-size: 20px; margin: 15px 0 0 0'
document.body.append($title3)

let $task3 = document.createElement('div')
$task3.classList.add('task3')
$task3.innerHTML = '<input placeholder="Длина стороны квадрата" type="number"></input><button>Периметр</button>'

let $task3Result = document.createElement('div')
$task3Result.classList.add('result')
$task3.append($task3Result)

document.body.append($task3)
let $task3Btn = document.querySelector('.task3 button')
let $task3Field = document.querySelector('.task3 input')
$task3Result = document.querySelector('.task3 .result')


let getResult3 = () => {
    let perimeterSquare = $task3Field.value
    $task3Result.innerHTML = `P = ` + perimeterSquare * 4
}

$task3Btn.onclick = getResult3

///////////////////////////////////////////

let $title4 = document.createElement('h1')
$title4.innerHTML = 'Задание 1.4'
$title4.style = 'color: #666; font-size: 20px; margin: 15px 0 0 0'
document.body.append($title4)

let $task4 = document.createElement('div')
$task4.classList.add('task4')
$task4.innerHTML = '<input placeholder="Радиус" type="number"></input><button>Площадь</button>'

let $task4Result = document.createElement('div')
$task4Result.classList.add('result')
$task4.append($task4Result)

document.body.append($task4)
let $task4Btn = document.querySelector('.task4 button')
let $task4Field = document.querySelector('.task4 input')
$task4Result = document.querySelector('.task4 .result')


let getResult4 = () => {
    const numberP = 3.1415
    let radiusCircle = $task4Field.value
    let areaCircle = numberP * radiusCircle ** 2;
    $task4Result.innerHTML = `Area of the circle ` + areaCircle
}

$task4Btn.onclick = getResult4

////////////////////////////////////////////

let $title5 = document.createElement('h1')
$title5.innerHTML = 'Задание 1.5'
$title5.style = 'color: #666; font-size: 20px; margin: 15px 0 0 0'
document.body.append($title5)

let $task5 = document.createElement('div')
$task5.classList.add('task5')
$task5.innerHTML = '<input class="input__distance" placeholder="Расстояние в км" type="number"></input><input class="input__time" placeholder="Время в часах" type="number"></input><button>Рассчитать скорость</button>'
let $task5Result = document.createElement('div')
$task5Result.classList.add('result')
$task5.append($task5Result)

document.body.append($task5)
let $task5Btn = document.querySelector('.task5 button')
let $task5Field1 = document.querySelector('.task5 .input__distance')
let $task5Field2 = document.querySelector('.task5 .input__time')
$task5Result = document.querySelector('.task5 .result')


let getResult5 = () => {
    let numberDistance = $task5Field1.value
    let numberTime = $task5Field2.value
    let numberSpeed = numberDistance / numberTime;
    $task5Result.innerHTML = `Вы должны передвигаться со скоростю ${numberSpeed} км/час`
}

$task5Btn.onclick = getResult5

///////////////////////////////////////////////

let $title6 = document.createElement('h1')
$title6.innerHTML = 'Задание 1.6'
$title6.style = 'color: #666; font-size: 20px; margin: 15px 0 0 0'
document.body.append($title6)

let $task6 = document.createElement('div')
$task6.classList.add('task6')
$task6.innerHTML = '<input type="number"></input><button>Курс евро в долларах</button>'

let $task6Result = document.createElement('div')
$task6Result.classList.add('result')
$task6.append($task6Result)

document.body.append($task6)
let $task6Btn = document.querySelector('.task6 button')
let $task6Field = document.querySelector('.task6 input')
$task6Result = document.querySelector('.task6 .result')


let getResult6 = () => {
    let numberEvro = 0.92
    let numberDollar = $task6Field.value
    const numberRate = numberDollar * numberEvro;
    $task6Result.innerHTML = `${numberDollar} dollars = ${numberRate} evro`
}

$task6Btn.onclick = getResult6

////////////////////////////////////////////////

let $title7 = document.createElement('h1')
$title7.innerHTML = 'Задание 1.7'
$title7.style = 'color: #666; font-size: 20px; margin: 15px 0 0 0'
document.body.append($title7)

let $task7 = document.createElement('div')
$task7.classList.add('task7')
$task7.innerHTML = '<input placeholder="Объем флешки в Гб" type="number"></input><button>Посчитать количество файлов</button>'

let $task7Result = document.createElement('div')
$task7Result.classList.add('result')
$task7.append($task7Result)

document.body.append($task7)
let $task7Btn = document.querySelector('.task7 button')
let $task7Field = document.querySelector('.task7 input')
$task7Result = document.querySelector('.task7 .result')


let getResult7 = () => {
    let sizeFlashDrive = $task7Field.value
    sizeFlashDrive *= 1024;
    const sizeFile = 820;
    $task7Result.innerHTML = `На вашей флешке могут поместиться ${(sizeFlashDrive - sizeFlashDrive % sizeFile) / sizeFile} файла по 820 мб`
}

$task7Btn.onclick = getResult7

/////////////////////////////////////////////////

let $title8 = document.createElement('h1')
$title8.innerHTML = 'Задание 1.8'
$title8.style = 'color: #666; font-size: 20px; margin: 15px 0 0 0'
document.body.append($title8)

let $task8 = document.createElement('div')
$task8.classList.add('task8')
$task8.innerHTML = '<input class="input__money" placeholder="Сколько у вас денег?" type="number"></input><input class="input__price" placeholder="Цена шоколадки" type="number"></input><button>Посчитать</button>'
let $task8Result = document.createElement('div')
$task8Result.classList.add('result')
$task8.append($task8Result)

document.body.append($task8)
let $task8Btn = document.querySelector('.task8 button')
let $task8Field1 = document.querySelector('.task8 .input__money')
let $task8Field2 = document.querySelector('.task8 .input__price')
$task8Result = document.querySelector('.task8 .result')


let getResult8 = () => {
    let userMoney = $task8Field1.value
    let priceChocolate = $task8Field2.value
    const quantityChocolate = (userMoney - userMoney % priceChocolate) / priceChocolate;
    const balanceMoney = userMoney % priceChocolate;
    $task8Result.innerHTML = `Ваших денег хватит на ${quantityChocolate} шоколадок. И у вас останеться ${balanceMoney} грн.`
}

$task8Btn.onclick = getResult8

////////////////////////////////////////////////////

let $title9 = document.createElement('h1')
$title9.innerHTML = 'Задание 1.9'
$title9.style = 'color: #666; font-size: 20px; margin: 15px 0 0 0'
document.body.append($title9)

let $task9 = document.createElement('div')
$task9.classList.add('task9')
$task9.innerHTML = '<input placeholder="Введите трехзначное число" type="number"></input><button>Выведите</button>'

let $task9Result = document.createElement('div')
$task9Result.classList.add('result')
$task9.append($task9Result)

document.body.append($task9)
let $task9Btn = document.querySelector('.task9 button')
let $task9Field = document.querySelector('.task9 input')
$task9Result = document.querySelector('.task9 .result')


let getResult9 = () => {
    let numberThreeValue = $task9Field.value
    let a = (numberThreeValue - numberThreeValue % 100) / 100,
        b = (numberThreeValue - 100 * a)
    b = (b - b % 10) / 10
    let c = numberThreeValue - 100 * a - 10 * b
    let numberResult = 100 * c + 10 * b + a
    $task9Result.innerHTML = `Результат - ${numberResult}`
}

$task9Btn.onclick = getResult9

////////////////////////////////////////////////////

let $title10 = document.createElement('h1')
$title10.innerHTML = 'Задание 1.10'
$title10.style = 'color: #666; font-size: 20px; margin: 15px 0 0 0'
document.body.append($title10)

let $task10 = document.createElement('div')
$task10.classList.add('task10')
$task10.innerHTML = '<input placeholder="Сумма вклада" type="number"></input><button>Вывести сумму начисленных процентов</button>'

let $task10Result = document.createElement('div')
$task10Result.classList.add('result')
$task10.append($task10Result)

document.body.append($task10)
let $task10Btn = document.querySelector('.task10 button')
let $task10Field = document.querySelector('.task10 input')
$task10Result = document.querySelector('.task10 .result')


let getResult10 = () => {
    let depositAmount = $task10Field.value
    let numberResult = ((5 / 12) * depositAmount * 2) / 100;
    $task10Result.innerHTML = ` ${numberResult}`
}

$task10Btn.onclick = getResult10

////////////////////////////////////////////////////

let $title11 = document.createElement('h1')
$title11.innerHTML = 'Задание 2.1'
$title11.style = 'color: #666; font-size: 20px; margin: 15px 0 0 0'
document.body.append($title11)

let $task11 = document.createElement('div')
$task11.classList.add('task11')
$task11.innerHTML = '<input placeholder="Укажите возраст" type="number"></input><button>Определить</button>'

let $task11Result = document.createElement('div')
$task11Result.classList.add('result')
$task11.append($task11Result)

document.body.append($task11)
let $task11Btn = document.querySelector('.task11 button')
let $task11Field = document.querySelector('.task11 input')
$task11Result = document.querySelector('.task11 .result')


let getResult11 = () => {
    let userYearOld = $task11Field.value
    if (userYearOld >= 0 && userYearOld <= 12) {
        $task11Result.innerHTML = `Вы - ребенок`
    } else if (userYearOld >= 12 && userYearOld < 18) {
        $task11Result.innerHTML = `Вы - подросток`
    } else if (userYearOld >= 19 && userYearOld < 60) {
        $task11Result.innerHTML = `Вы - взрослый`
    } else if (userYearOld >= 60 && userYearOld <= 100) {
        $task11Result.innerHTML = `Вы - пенсионер`
    } else {
        $task11Result.innerHTML = `Как интересно...`
    }

}

$task11Btn.onclick = getResult11

/////////////////////////////////////////////////////

let $title12 = document.createElement('h1')
$title12.innerHTML = 'Задание 2.2'
$title12.style = 'color: #666; font-size: 20px; margin: 15px 0 0 0'
document.body.append($title12)

let $task12 = document.createElement('div')
$task12.classList.add('task12')
$task12.innerHTML = '<input placeholder="Введите 0-9" type="number"></input><button>Вывести спецсимвол</button>'

let $task12Result = document.createElement('div')
$task12Result.classList.add('result')
$task12.append($task12Result)

document.body.append($task12)
let $task12Btn = document.querySelector('.task12 button')
let $task12Field = document.querySelector('.task12 input')
$task12Result = document.querySelector('.task12 .result')

let getResult12 = () => {
    let userNumber = $task12Field.value
    if (userNumber == 1) {
        $task12Result.innerHTML = `Спецсимвол - !`
    } else if (userNumber == 2) {
        $task12Result.innerHTML = `Спецсимвол - @`
    } else if (userNumber == 3) {
        $task12Result.innerHTML = `Спецсимвол - #`
    } else if (userNumber == 4) {
        $task12Result.innerHTML = `Спецсимвол - $`
    } else if (userNumber == 5) {
        $task12Result.innerHTML = `Спецсимвол - %`
    } else if (userNumber == 6) {
        $task12Result.innerHTML = `Спецсимвол - ^`
    } else if (userNumber == 7) {
        $task12Result.innerHTML = `Спецсимвол - &`
    } else if (userNumber == 8) {
        $task12Result.innerHTML = `Спецсимвол - *`
    } else if (userNumber == 9) {
        $task12Result.innerHTML = `Спецсимвол - (`
    } else if (userNumber == 0) {
        $task12Result.innerHTML = `Спецсимвол - )`
    } else {
        $task12Result.innerHTML = `Вы ввели что-то не то. Попробуйте ещё раз`
    }
}

$task12Btn.onclick = getResult12

/////////////////////////////////////////////////////

let $title13 = document.createElement('h1')
$title13.innerHTML = 'Задание 2.3'
$title13.style = 'color: #666; font-size: 20px; margin: 15px 0 0 0'
document.body.append($title13)

let $task13 = document.createElement('div')
$task13.classList.add('task13')
$task13.innerHTML = '<input placeholder="Введите трехзначное число" type="number"></input><button>Выведите</button>'

let $task13Result = document.createElement('div')
$task13Result.classList.add('result')
$task13.append($task13Result)

document.body.append($task13)
let $task13Btn = document.querySelector('.task13 button')
let $task13Field = document.querySelector('.task13 input')
$task13Result = document.querySelector('.task13 .result')


let getResult13 = () => {
    let numberThreeValue = $task13Field.value
    let a = (numberThreeValue - numberThreeValue % 100) / 100,
        b = (numberThreeValue - 100 * a)
    b = (b - b % 10) / 10
    let c = numberThreeValue - 100 * a - 10 * b
    let numberResult = 100 * a + 10 * b + c
    if (a == b && a == c && a == c) {
        $task13Result.innerHTML = `Да. Все цифры сходяться - ${numberResult}`
    } else {
        $task13Result.innerHTML = `Нет. Цифры отличаються - ${numberResult}`
    }

}

$task13Btn.onclick = getResult13

//////////////////////////////////////////////////////////

let $title14 = document.createElement('h1')
$title14.innerHTML = 'Задание 2.4'
$title14.style = 'color: #666; font-size: 20px; margin: 15px 0 0 0'
document.body.append($title14)

let $task14 = document.createElement('div')
$task14.classList.add('task14')
$task14.innerHTML = '<input placeholder="Введите год" type="number"></input><button>Показать</button>'

let $task14Result = document.createElement('div')
$task14Result.classList.add('result')
$task14.append($task14Result)

document.body.append($task14)
let $task14Btn = document.querySelector('.task14 button')
let $task14Field = document.querySelector('.task14 input')
$task14Result = document.querySelector('.task14 .result')

let getResult14 = () => {
    let yearV = $task14Field.value
    if ((yearV % 400 == 0 || yearV % 4 == 0) && yearV % 100 != 0) {
        $task14Result.innerHTML = `Этот год высокосный`
    } else {
        $task14Result.innerHTML = `Нет. Этот год не высокосный`
    }

}

$task14Btn.onclick = getResult14

//////////////////////////////////////////////////////////////

let $title15 = document.createElement('h1')
$title15.innerHTML = 'Задание 2.5'
$title15.style = 'color: #666; font-size: 20px; margin: 15px 0 0 0'
document.body.append($title15)

let $task15 = document.createElement('div')
$task15.classList.add('task15')
$task15.innerHTML = '<input placeholder="Введите 5-ое число" type="number"></input><button>Выведите</button>'

let $task15Result = document.createElement('div')
$task15Result.classList.add('result')
$task15.append($task15Result)

document.body.append($task15)
let $task15Btn = document.querySelector('.task15 button')
let $task15Field = document.querySelector('.task15 input')
$task15Result = document.querySelector('.task15 .result')


let getResult15 = () => {
    let numberFiveValue = $task15Field.value
    let a = (numberFiveValue - numberFiveValue % 10000) / 10000,
        b = (numberFiveValue - 10000 * a)
    b = (b - b % 1000) / 1000
    let c = (numberFiveValue - 10000 * a - 1000 * b)
    c = (c - c % 100) / 100
    let d = (numberFiveValue - 10000 * a - 1000 * b - 100 * c)
    d = (d - d % 10) / 10
    let e = numberFiveValue - 10000 * a - 1000 * b - 100 * c - 10 * d
    let numberResult = 10000 * a + 1000 * b + 100 * c + 10 * d + e
    if (a == e && b == d) {
        $task15Result.innerHTML = `${numberResult} - Это число является палиндромом`
    } else {
        $task15Result.innerHTML = `${numberResult} - Нет. Это число не является палиндромом`
    }
}

$task15Btn.onclick = getResult15

//////////////////////////////////////////////////////////////

let $title16 = document.createElement('h1')
$title16.innerHTML = 'Задание 2.6'
$title16.style = 'color: #666; font-size: 20px; margin: 15px 0 0 0'
document.body.append($title16)

let $task16 = document.createElement('div')
$task16.classList.add('task16')
$task16.innerHTML = '<input class="input__quantity" placeholder="Введите кол. USD" type="number"><input class="input__currency" placeholder="Введите валюту" type="text"></input><button>Перевести</button>'

let $task16Result = document.createElement('div')
$task16Result.classList.add('result')
$task16.append($task16Result)

document.body.append($task16)
let $task16Btn = document.querySelector('.task16 button')
let $task16Field1 = document.querySelector('.task16 .input__quantity')
let $task16Field2 = document.querySelector('.task16 .input__currency')
$task16Result = document.querySelector('.task16 .result')


let getResult16 = () => {
    let quantityUsd = $task16Field1.value
    let transferСurrency = $task16Field2.value
    if (transferСurrency == 'EUR' || transferСurrency == 'eur') {
        const numberRate = 0.92 * quantityUsd
        $task16Result.innerHTML = `${quantityUsd} USD = ${numberRate} EUR`
    } else if (transferСurrency == 'UAH' || transferСurrency == 'uah') {
        const numberRate = 26.94 * quantityUsd
        $task16Result.innerHTML = `${quantityUsd} USD = ${numberRate} UAH`
    } else if (transferСurrency == 'AZN' || transferСurrency == 'azn') {
        const numberRate = 1.7 * quantityUsd
        $task16Result.innerHTML = `${quantityUsd} USD = ${numberRate} AZN`
    } else {
        $task16Result.innerHTML = `Пожалуйста, введите одну из этих валют: EUR, UAH или AZN`
    }
}

$task16Btn.onclick = getResult16

//////////////////////////////////////////////////////////////

let $title17 = document.createElement('h1')
$title17.innerHTML = 'Задание 2.7'
$title17.style = 'color: #666; font-size: 20px; margin: 15px 0 0 0'
document.body.append($title17)

let $task17 = document.createElement('div')
$task17.classList.add('task17')
$task17.innerHTML = '<input placeholder="Введите сумму" type="number"></input><button>Купить</button>'

let $task17Result = document.createElement('div')
$task17Result.classList.add('result')
$task17.append($task17Result)

document.body.append($task17)
let $task17Btn = document.querySelector('.task17 button')
let $task17Field = document.querySelector('.task17 input')
$task17Result = document.querySelector('.task17 .result')

let getResult17 = () => {
    let quantityMoney = $task17Field.value
    if (quantityMoney >= 200 && quantityMoney < 300) {
        quantityMoney -= (3 * quantityMoney) / 100
        $task17Result.innerHTML = `${quantityMoney} - со скидкой 3%`
    } else if (quantityMoney >= 300 && quantityMoney < 500) {
        quantityMoney -= (5 * quantityMoney) / 100
        $task17Result.innerHTML = `${quantityMoney} - со скидкой 5%`
    } else if (quantityMoney >= 500) {
        quantityMoney -= (7 * quantityMoney) / 100
        $task17Result.innerHTML = `${quantityMoney} - со скидкой 7%`
    } else if (quantityMoney == 0) {
        $task17Result.innerHTML = `Нужно что-то купить`
    } else if (quantityMoney < 0) {
        $task17Result.innerHTML = `Ошибка!!! Попробуйте ещё раз`
    } else {
        $task17Result.innerHTML = `${quantityMoney} - без скидки! Нужно, чтобы сумма покупки начиналась с 200`
    }
}

$task17Btn.onclick = getResult17

/////////////////////////////////////////////////////////////////

let $title18 = document.createElement('h1')
$title18.innerHTML = 'Задание 2.8'
$title18.style = 'color: #666; font-size: 20px; margin: 15px 0 0 0'
document.body.append($title18)

let $task18 = document.createElement('div')
$task18.classList.add('task18')
$task18.innerHTML = '<input class="input__length" placeholder="Длина окружности" type="number"><input class="input__perimeter" placeholder="Периметр квадрата" type="number"></input><button>Определить</button>'

let $task18Result = document.createElement('div')
$task18Result.classList.add('result')
$task18.append($task18Result)

document.body.append($task18)
let $task18Btn = document.querySelector('.task18 button')
let $task18Field1 = document.querySelector('.task18 .input__length')
let $task18Field2 = document.querySelector('.task18 .input__perimeter')
$task18Result = document.querySelector('.task18 .result')

let getResult18 = () => {
    let lengthСircle = $task18Field1.value,
        perimeterSquare = $task18Field2.value,
        sideSquare = perimeterSquare / 4
    if (sideSquare == lengthСircle) {
        $task18Result.innerHTML = `Да. Такая окружность поместиться в указанный квадрат - ${sideSquare} = ${lengthСircle}`
    } else {
        $task18Result.innerHTML = `Нет. Такая окружность не поместиться в указанный квадрат - ${sideSquare} != ${lengthСircle}`
    }
}

$task18Btn.onclick = getResult18

///////////////////////////////////////////////////////////////////////

// let $title19 = document.createElement('h1')
// $title19.innerHTML = 'Задание 2.9'
// $title19.style = 'color: #666; font-size: 20px; margin: 15px 0 0 0'
// document.body.append($title19)

// let $task19 = document.createElement('div')
// $task19.classList.add('task19')
// $task19.innerHTML = '<input class="input__day" placeholder="Введите день" type="number"></input><input class="input__month" placeholder="Введите месяц" type="number"></input><input class="input__year" placeholder="Введите год" type="number"></input><button>Купить</button>'

// let $task19Result = document.createElement('div')
// $task19Result.classList.add('result')
// $task19.append($task19Result)

// document.body.append($task19)
// let $task19Btn = document.querySelector('.task19 button')
// let $task19Field1 = document.querySelector('.task19 .input__day')
// let $task19Field2 = document.querySelector('.task19 .input__month')
// let $task19Field3 = document.querySelector('.task19 .input__year')
// $task19Result = document.querySelector('.task19 .result')

// let getResult19 = () => {
//     let numberDay = $task19Field1.value,
//         numberMonth = $task19Field2.value,
//         numberYear = $task19Field3.value
//     switch (numberMonth) {
//         case 1:
//             numberDay = 31
//         case 2:
//             numberDay = 29
//         case 3:
//             numberDay = 31
//         case 4:
//             numberDay = 30
//         case 4:
//             numberDay = 31
//         case 5:
//             numberDay = 30
//         case 6:
//             numberDay = 31
//     }


// }

// $task19Btn.onclick = getResult19

///////////////////////////////////////////////////////////////////////

