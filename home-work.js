'use strict'

let $title1 = document.createElement('h1')
$title1.innerHTML = 'Задание 1.1 - Запросите у пользователя его имя и выведите в ответ: «Привет, его имя!».'
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
$title2.innerHTML = 'Задание 1.2 - Запросите у пользователя год его рождения, посчитайте, сколько ему лет и выведите результат. Текущий год укажите в коде как константу.'
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
$title3.innerHTML = 'Задание 1.3 - Запросите у пользователя длину стороны квадрата и выведите периметр такого квадрата.'
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
$title4.innerHTML = 'Задание 1.4 - Запросите у пользователя радиус окружности и выведите площадь такой окружности.'
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
$title5.innerHTML = 'Задание 1.5 - Запросите у пользователя расстояние в км между двумя городами и за сколько часов он хочет добраться. Посчитайте скорость, с которой необходимо двигаться, чтобы успеть вовремя.'
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
$title6.innerHTML = 'Задание 1.6 - Реализуйте конвертор валют. Пользователь вводит доллары, программа переводит в евро. Курс валюты храните в константе.'
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
$title7.innerHTML = 'Задание 1.7 - Пользователь указывает объем флешки в Гб. Программа должна посчитать, сколько файлов размером в 820 Мб помещается на флешку.'
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
$title8.innerHTML = 'Задание 1.8 - Пользователь вводит сумму денег в кошельке и цену одной шоколадки. Программа выводит, сколько шоколадок может купить пользователь, и сколько сдачи у него останется.'
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
$title9.innerHTML = 'Задание 1.9 - Запросите у пользователя трехзначное число и выведите его задом наперед. Для решения задачи вам понадобится оператор % (остаток от деления).'
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
$title10.innerHTML = 'Задание 1.10 - Пользователь вводит сумму вклада в банк на 2 месяца, с процентной ставкой депозита 5% годовых. Вывести сумму начисленных процентов.'
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
$title11.innerHTML = 'Задание 2.1 - Запросить у пользователя его возраст и определить, кем он является: ребенком (0–2), подростком (12–18), взрослым (18_60) или пенсионером (60– ...).'
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
$title12.innerHTML = 'Задание 2.2 - Запросить у пользователя число от 0 до 9 и вывести ему спецсимвол, который расположен на этой клавише (1–!, 2–@, 3–# и т. д).'
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
$title13.innerHTML = 'Задание 2.3 - Запросить у пользователя трехзначное число и проверить, есть ли в нем одинаковые цифры.'
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
$title14.innerHTML = 'Задание 2.4 - Запросить у пользователя год и проверить, високосный он или нет. Високосный год либо кратен 400, либо кратен 4 и при этом не кратен 100.'
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
$title15.innerHTML = 'Задание 2.5 - Запросить у пользователя пятиразрядное число и определить, является ли оно палиндромом.'
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
$title16.innerHTML = 'Задание 2.6 - Написать конвертор валют. Пользователь вводит количество USD, выбирает, в какую валюту хочет перевести EUR, UAN или AZN, и получает в ответ соответствующую сумму.'
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
$title17.innerHTML = 'Задание 2.7 - Запросить у пользователя сумму покупки и вывести сумму к оплате со скидкой: от 200 до 300 – скидка будет 3%, от 300 до 500 – 5%, от 500 и выше – 7%.'
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
$title18.innerHTML = 'Задание 2.8 - Запросить у пользователя длину окружности и периметр квадрата. Определить, может ли такая окружность поместиться в указанный квадрат.'
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

let $title19 = document.createElement('h1')
$title19.innerHTML = 'Задание 2.9 - Задать пользователю 3 вопроса, в каждом вопросе по 3 варианта ответа. За каждый правильный ответ начисляется 2 балла. После вопросов выведите пользователю количество набранных баллов.'
$title19.style = 'color: #666; font-size: 20px; margin: 15px 0 0 0'
document.body.append($title19)

let $task19 = document.createElement('div')
$task19.classList.add('task19')

let $titleQuestion1 = document.createElement('h2')
$titleQuestion1.innerHTML = '1) Сколько 2 + 2 ?'
$titleQuestion1.style = 'color: #666; font-size: 16px; margin: 15px 0 0 0'
document.body.append($titleQuestion1)

let $listQuestion1 = document.createElement('ul')
document.body.append($listQuestion1)

let $question1 = document.createElement('li')
$question1.innerHTML = '<input type="checkbox" id="result11"><label>6</label>'

let $question2 = document.createElement('li')
$question2.innerHTML = '<input type="checkbox" id="result12"><label>4</label>'

let $question3 = document.createElement('li')
$question3.innerHTML = '<input type="checkbox" id="result12"><label>2</label>'

let $btnNext1 = document.createElement('button')
$btnNext1.innerHTML = 'Следующий вопрос'

$listQuestion1.append($question1, $question2, $question3, $btnNext1)

let result = 0

$btnNext1.addEventListener('click', () => {
    if (document.getElementById("result12").checked) result += 2

    $titleQuestion1.innerHTML = '2) Сколько 8 - 2 ?'
    $question1.innerHTML = '<input type="checkbox" id="result21"><label>10</label>'
    $question2.innerHTML = '<input type="checkbox" id="result22"><label>5</label>'
    $question3.innerHTML = '<input type="checkbox" id="result23"><label>6</label>'

    $btnNext1.addEventListener('click', () => {
        if (document.getElementById("result23").checked) result += 2

        $titleQuestion1.innerHTML = '3) Сколько 10 / 2 ?'
        $question1.innerHTML = '<input type="checkbox" id="result31"><label>5</label>'
        $question2.innerHTML = '<input type="checkbox" id="result32"><label>4</label>'
        $question3.innerHTML = '<input type="checkbox" id="result33"><label>6</label>'

        $btnNext1.addEventListener('click', () => {
            if (document.getElementById("result31").checked) result += 2

            $task19Result.innerHTML = `Ваш результат - ${result}`

            $listQuestion1.innerHTML = ''
            $titleQuestion1.innerHTML = ''
        })
    })
})

let $task19Result = document.createElement('div')
$task19Result.classList.add('result')
$task19.append($task19Result)

document.body.append($task19)
$task19Result = document.querySelector('.task19 .result')

///////////////////////////////////////////////////////////////////////

let $title20 = document.createElement('h1')
$title20.innerHTML = 'Задание 2.10 - Запросить дату (день, месяц, год) и вывести следующую за ней дату. Учтите возможность перехода на следующий месяц, год, а также високосный год.'
$title20.style = 'color: #666; font-size: 20px; margin: 15px 0 0 0'
document.body.append($title20)

let $task20 = document.createElement('div')
$task20.classList.add('task20')
$task20.innerHTML = '<input type="date"></input><button>Вывести</button>'

let $task20Result = document.createElement('div')
$task20Result.classList.add('result')
$task20.append($task20Result)

document.body.append($task20)
let $task20Btn = document.querySelector('.task20 button')
let $task20Field1 = document.querySelector('.task20 input')
$task20Result = document.querySelector('.task20 .result')

function getDay(day) {
    let date = new Date(day)
    let nextDate = new Date(date)
    nextDate.setDate(date.getDate() + 1)
    return `Cледущая дата ${nextDate}`
}

$task20Btn.addEventListener('click', () => {
    let day = document.querySelector('.task20 input')
    $task20Result.innerHTML = getDay(day.value)
})

///////////////////////////////////////////////////////////////////////

let $title21 = document.createElement('h1')
$title21.innerHTML = 'Задание 3.1 - Подсчитать сумму всех чисел в заданном пользователем диапазоне.'
$title21.style = 'color: #666; font-size: 20px; margin: 15px 0 0 0'
document.body.append($title21)

let $task21 = document.createElement('div')
$task21.classList.add('task21')
$task21.innerHTML = '<input class="input__start" placeholder="Начало диапазона" type="number"></input><input class="input__end" placeholder="Конец диапазона" type="number"></input><button>Найти сумму</button>'

let $task21Result = document.createElement('div')
$task21Result.classList.add('result')
$task21.append($task21Result)

document.body.append($task21)
let $task21Btn = document.querySelector('.task21 button')
let $task21Field1 = document.querySelector('.task21 .input__start')
let $task21Field2 = document.querySelector('.task21 .input__end')
$task21Result = document.querySelector('.task21 .result')

let getResult21 = () => {
    let a = Number($task21Field1.value)
    let b = Number($task21Field2.value)
    let sum = 0
    while (a <= b) {
        sum += a
        a++
    }
    $task21Result.innerHTML = `Сумма чисел в диапазоне - ${sum}`
}

$task21Btn.onclick = getResult21

////////////////////////////////////////////////////////////////////////

let $title22 = document.createElement('h1')
$title22.innerHTML = 'Задание 3.2 - Запросить 2 числа и найти только наибольший общий делитель.'
$title22.style = 'color: #666; font-size: 20px; margin: 15px 0 0 0'
document.body.append($title22)

let $task22 = document.createElement('div')
$task22.classList.add('task22')
$task22.innerHTML = '<input class="input__start" placeholder="1-ое число" type="number"></input><input class="input__end" placeholder="2-ое число" type="number"></input><button>Найти НОД</button>'

let $task22Result = document.createElement('div')
$task22Result.classList.add('result')
$task22.append($task22Result)

document.body.append($task22)
let $task22Btn = document.querySelector('.task22 button')
let $task22Field1 = document.querySelector('.task22 .input__start')
let $task22Field2 = document.querySelector('.task22 .input__end')
$task22Result = document.querySelector('.task22 .result')

let getResult22 = () => {
    let a = Math.abs(Number($task22Field1.value))
    let b = Math.abs(Number($task22Field2.value))

    while (a != b) {
        if (a > b) {
            a = a - b;
        } else {
            b = b - a;
        }
    }
    $task22Result.innerHTML = `НОД - ${a}`
}

$task22Btn.onclick = getResult22

//////////////////////////////////////////////////////////////////////////

let $title23 = document.createElement('h1')
$title23.innerHTML = 'Задание 3.3 - Запросить у пользователя число и вывести все делители этого числа.'
$title23.style = 'color: #666; font-size: 20px; margin: 15px 0 0 0'
document.body.append($title23)

let $task23 = document.createElement('div')
$task23.classList.add('task23')
$task23.innerHTML = '<input placeholder="число" type="number"></input><button>Найти делители</button>'

let $task23Result = document.createElement('div')
$task23Result.classList.add('result')
$task23.append($task23Result)

document.body.append($task23)
let $task23Btn = document.querySelector('.task23 button')
let $task23Field = document.querySelector('.task23 input')
$task23Result = document.querySelector('.task23 .result')

let getResult23 = () => {
    let a = Math.abs($task23Field.value)
    let result = []
    for (let i = 1; i <= a; i++) {
        if (a % i == 0) {
            result.push(i)
        }
    }
    $task23Result.innerHTML = `Делители - ${result}`
}

$task23Btn.onclick = getResult23

///////////////////////////////////////////////////////////////////////////

let $title24 = document.createElement('h1')
$title24.innerHTML = 'Задание 3.4 - Определить количество цифр в введенном числе.'
$title24.style = 'color: #666; font-size: 20px; margin: 15px 0 0 0'
document.body.append($title24)

let $task24 = document.createElement('div')
$task24.classList.add('task24')
$task24.innerHTML = '<input placeholder="число" type="number"></input><button>Количество цифр</button>'

let $task24Result = document.createElement('div')
$task24Result.classList.add('result')
$task24.append($task24Result)

document.body.append($task24)
let $task24Btn = document.querySelector('.task24 button')
let $task24Field = document.querySelector('.task24 input')
$task24Result = document.querySelector('.task24 .result')

let getResult24 = () => {
    let a = $task24Field.value
    let quantityNumber = 0

    while (quantityNumber < a.length) {
        quantityNumber++
    }
    $task24Result.innerHTML = `Количество цифр - ${quantityNumber}`
}

$task24Btn.onclick = getResult24

///////////////////////////////////////////////////////////////////////////

let $title25 = document.createElement('h1')
$title25.innerHTML = 'Задание 3.5 - Запросить у пользователя 10 чисел и подсчитать, сколько он ввел положительных, отрицательных и нулей. При этом также посчитать, сколько четных и нечетных. Вывести статистику на экран. '
$title25.style = 'color: #666; font-size: 20px; margin: 15px 0 0 0'
document.body.append($title25)

let $task25 = document.createElement('div')
$task25.classList.add('task25')
$task25.innerHTML = '<input placeholder="числа" type="text"></input><button>Количество цифр</button>'

let $task25Result1 = document.createElement('div')
let $task25Result2 = document.createElement('div')
let $task25Result3 = document.createElement('div')
let $task25Result4 = document.createElement('div')
let $task25Result5 = document.createElement('div')

$task25Result1.classList.add('result1')
$task25Result2.classList.add('result2')
$task25Result3.classList.add('result3')
$task25Result4.classList.add('result4')
$task25Result5.classList.add('result5')

$task25.append($task25Result1)
$task25.append($task25Result2)
$task25.append($task25Result3)
$task25.append($task25Result4)
$task25.append($task25Result5)

document.body.append($task25)
let $task25Btn = document.querySelector('.task25 button')
let $task25Field = document.querySelector('.task25 input')
$task25Result1 = document.querySelector('.task25 .result1')
$task25Result2 = document.querySelector('.task25 .result2')
$task25Result3 = document.querySelector('.task25 .result3')
$task25Result4 = document.querySelector('.task25 .result4')
$task25Result5 = document.querySelector('.task25 .result5')

let getResult25 = () => {
    let numbers = $task25Field.value
    let arrOfNumbers = numbers.split(" ")
    let plus = 0,
        mines = 0,
        ziro = 0,
        even = 0,
        notEven = 0
    for (let i = 0; i < arrOfNumbers.length; i++) {
        let a = arrOfNumbers[i]
        if (a > 0) {
            plus++
        }
        if (a < 0) {
            mines++
        }
        if (a == 0) {
            ziro++
        }
        if (a % 2 == 0) {
            even++
        }
        if (a % 2 != 0) {
            notEven++
        }
    }

    if (plus > 0) {
        $task25Result1.innerHTML = `Количество положительных - ${plus}`
    } else {
        $task25Result1.innerHTML = `Положительных нет`
    }
    if (mines > 0) {
        $task25Result2.innerHTML = `Количество отрицательных- ${mines}`
    } else {
        $task25Result2.innerHTML = `Отрицательных нет`
    }
    if (ziro > 0) {
        $task25Result3.innerHTML = `Количество нулей- ${ziro}`
    } else {
        $task25Result3.innerHTML = `Нулей нет`
    }
    if (even > 0) {
        $task25Result4.innerHTML = `Количество четных- ${even}`
    } else {
        $task25Result4.innerHTML = `Четных нет`
    }
    if (notEven > 0) {
        $task25Result5.innerHTML = `Количество нечетных- ${notEven}`
    } else {
        $task25Result5.innerHTML = `Чечетных нет`
    }
}

$task25Btn.onclick = getResult25

/////////////////////////////////////////////////////////////////////////////

let $title26 = document.createElement('h1')
$title26.innerHTML = 'Задание 3.6 - Зациклить калькулятор. Запросить у пользователя 2 числа и знак, решить пример, вывести результат и спросить, хочет ли он решить еще один пример. И так до тех пор, пока пользователь не откажется.'
$title26.style = 'color: #666; font-size: 20px; margin: 15px 0 0 0'
document.body.append($title26)

let $task26 = document.createElement('div')
$task26.classList.add('task26')
$task26.innerHTML = '<input class="input__number-1" placeholder="число" type="number"></input><input class="input__act" placeholder="знак" type="text"></input><input class="input__number-2" placeholder="число" type="number"></input><button>Количество цифр</button>'

let $task26Result = document.createElement('div')
$task26Result.classList.add('result')
$task26.append($task26Result)

let $task26Repeat = document.createElement('div')
$task26Repeat.classList.add('repeat')
$task26.append($task26Repeat)

let $task26Yes = document.createElement('div')
$task26Yes.classList.add('button__yes')
$task26.append($task26Yes)

let $task26No = document.createElement('div')
$task26Yes.classList.add('button__no')
$task26.append($task26No)

document.body.append($task26)
let $task26Btn = document.querySelector('.task26 button')
let $task26Field1 = document.querySelector('.task26 .input__number-1')
let $task26Field2 = document.querySelector('.task26 .input__number-2')
let $task26Field3 = document.querySelector('.task26 .input__act')
$task26Result = document.querySelector('.task26 .result')
$task26Repeat = document.querySelector('.task26 .repeat')
// $task26Yes = document.querySelector('button')
// $task26No = document.querySelector('button')


let getResult26 = () => {
    let numberValue1 = Number($task26Field1.value),
        numberValue2 = Number($task26Field2.value),
        mathAct = $task26Field3.value

    if (mathAct == '+') {
        let numberResult = numberValue1 + numberValue2
        $task26Result.innerHTML = `Результат - ${numberResult}`
    } else if (mathAct == '-') {
        let numberResult = numberValue1 - numberValue2
        $task26Result.innerHTML = `Результат - ${numberResult}`
    } else if (mathAct == '/') {
        let numberResult = numberValue1 / numberValue2
        $task26Result.innerHTML = `Результат - ${numberResult}`
    } else if (mathAct == '*') {
        let numberResult = numberValue1 * numberValue2
        $task26Result.innerHTML = `Результат - ${numberResult}`
    } else {
        $task26Result.innerHTML = `Вы ввели что-то не так. Повторите, пожалуйста.`
    }
}

// $task26Repeat.innerHTML = 'Продолжыть?'

$task26Btn.onclick = getResult26

/////////////////////////////////////////////////////////////////////////////

let $title27 = document.createElement('h1')
$title27.innerHTML = 'Задание 3.7 - Запросить у пользователя число и на сколько цифр его сдвинуть. Сдвинуть цифры числа и вывести результат.'
$title27.style = 'color: #666; font-size: 20px; margin: 15px 0 0 0'
document.body.append($title27)

let $task27 = document.createElement('div')
$task27.classList.add('task27')
$task27.innerHTML = '<input class="input__number" placeholder="число" type="number"></input><input class="input__shift" placeholder="Шаг сдвига" type="number"></input><button>Сдвинуть</button>'

let $task27Result = document.createElement('div')
$task27Result.classList.add('result')
$task27.append($task27Result)

document.body.append($task27)
let $task27Btn = document.querySelector('.task27 button')
let $task27Field1 = document.querySelector('.task27 .input__number')
let $task27Field2 = document.querySelector('.task27 .input__shift')
$task27Result = document.querySelector('.task27 .result')

let getResult27 = () => {
    let number = $task27Field1.value,
        numberShift = $task27Field2.value,
        arr = number.split('')
    for (let i = 0; i < numberShift; i++) {
        arr.push(arr.shift())
    }
    $task27Result.innerHTML = `${arr}`
}

$task27Btn.onclick = getResult27

//////////////////////////////////////////////////////////////////////////////

let $title28 = document.createElement('h1')
$title28.innerHTML = 'Задание 3.8 - Зациклить вывод дней недели таким образом: «День недели. Хотите увидеть следующий день?» и так до тех пор, пока пользователь нажимает OK.'
$title28.style = 'color: #666; font-size: 20px; margin: 15px 0 0 0'
document.body.append($title28)

let $task28 = document.createElement('div')
$task28.classList.add('task28')
$task28.innerHTML = '<button>Показать</button>'

let $task28Result = document.createElement('div')
$task28Result.classList.add('result')
$task28.append($task28Result)

document.body.append($task28)
$task28Result = document.querySelector('.task28 .result')
let $task28Btn = document.querySelector('.task28 button')

let dayOfWeek = 0

let getResult28 = () => {
    const days = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
    $task28Result.innerHTML = `${days[dayOfWeek]}`
    dayOfWeek = (dayOfWeek + 1) % days.length
}
$task28Btn.onclick = getResult28

//////////////////////////////////////////////////////////////////////////////

let $title29 = document.createElement('h1')
$title29.innerHTML = 'Задание 3.9 - Вывести таблицу умножения для всех чисел от 2 до 9. Каждое число необходимо умножить на числа от 1 до 10.'
$title29.style = 'color: #666; font-size: 20px; margin: 15px 0 0 0'
document.body.append($title29)

let $task29 = document.createElement('div')
$task29.classList.add('task29')
$task29.innerHTML = '<input placeholder="число" type="number"></input><button>Показать</button>'

let $task29Result = document.createElement('div')
$task29Result.classList.add('result')
$task29.append($task29Result)

document.body.append($task29)
let $task29Btn = document.querySelector('.task29 button')
$task29Result = document.querySelector('.task29 .result')

function getTableNumber(number) {
    let numberIncrease = ''
    let numberResult = 0
    for (let i = 1; i <= 10; i++) {
        numberResult = number * i
        numberIncrease += numberResult + '<br>'
    }
    return `${numberIncrease}`
}

$task29Btn.addEventListener('click', () => {
    let numberTable = document.querySelector('.task29 input')
    $task29Result.innerHTML = getTableNumber(Number(numberTable.value))
})

//////////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////////

let $title31 = document.createElement('h1')
$title31.innerHTML = 'Задание 4.1 - Написать функцию, которая принимает 2 числа и возвращает -1, если первое меньше, чем второе; 1 – если первое больше, чем второе; и 0 – если числа равны.'
$title31.style = 'color: #666; font-size: 20px; margin: 15px 0 0 0'
document.body.append($title31)

let $task31 = document.createElement('div')
$task31.classList.add('task31')
$task31.innerHTML = '<input class="input__number-one" placeholder="1-ое число" type="number"></=> <input class="input__number-two" placeholder="2-ое число" type="number"></input><button>Посмотреть</button>'

let $task31Result = document.createElement('div')
$task31Result.classList.add('result')
$task31.append($task31Result)

document.body.append($task31)
let $task31Btn = document.querySelector('.task31 button')
let $task31Field1 = document.querySelector('.task31 .input__number-one')
let $task31Field2 = document.querySelector('.task31 .input__number-two')
$task31Result = document.querySelector('.task31 .result')

function getResult31(value) {
    let numberFirst = Number($task31Field1.value),
        numberSecond = Number($task31Field2.value)
    if (numberFirst < numberSecond) {
        value = -1
        $task31Result.innerHTML = `Возращает - ${value} `
    } else if (numberFirst > numberSecond) {
        value = 1
        $task31Result.innerHTML = `Возращает - ${value} `
    } else if (numberFirst = numberSecond) {
        value = 0
        $task31Result.innerHTML = `Возращает - ${value} `
    }
}

$task31Btn.onclick = getResult31

///////////////////////////////////////////////////////////////////////////////////

let $title32 = document.createElement('h1')
$title32.innerHTML = 'Задание 4.2 - Написать функцию, которая вычисляет факториал переданного ей числа.'
$title32.style = 'color: #666; font-size: 20px; margin: 15px 0 0 0'
document.body.append($title32)

let $task32 = document.createElement('div')
$task32.classList.add('task32')
$task32.innerHTML = '<input class="input__number" placeholder="1-ое число" type="number"></input></input><button>Посчитать</button>'

let $task32Result = document.createElement('div')
$task32Result.classList.add('result')
$task32.append($task32Result)

document.body.append($task32)
let $task32Btn = document.querySelector('.task32 button')
let $task32Field1 = document.querySelector('.task32 .input__number')
$task32Result = document.querySelector('.task32 .result')

function getResult32() {
    let number = Number($task32Field1.value)
    let result = 1

    for (let i = 1; i <= number; i++) {
        result *= i
    }
    $task32Result.innerHTML = `Результат - ${result} `
}

$task32Btn.onclick = getResult32

//////////////////////////////////////////////////////////////////////////////////

let $title33 = document.createElement('h1')
$title33.innerHTML = 'Задание 4.3 - Написать функцию, которая принимает три отдельные цифры и превращает их в одно число.'
$title33.style = 'color: #666; font-size: 20px; margin: 15px 0 0 0'
document.body.append($title33)

let $task33 = document.createElement('div')
$task33.classList.add('task33')
$task33.innerHTML = '<input class="input__number1" placeholder="1-ая цифра" type="number"></input><input class="input__number2" placeholder="2-ая цифра" type="number"></input><input class="input__number3" placeholder="3-ая цифра" type="number"></input><button>Посчитать</button>'

let $task33Result = document.createElement('div')
$task33Result.classList.add('result')
$task33.append($task33Result)

document.body.append($task33)
let $task33Btn = document.querySelector('.task33 button')
let $task33Field1 = document.querySelector('.task33 .input__number1')
let $task33Field2 = document.querySelector('.task33 .input__number2')
let $task33Field3 = document.querySelector('.task33 .input__number3')
$task33Result = document.querySelector('.task33 .result')

function getResult33() {
    let numberalFirst = $task33Field1.value,
        numberalSecond = $task33Field2.value,
        numberalThird = $task33Field3.value
    if (numberalFirst == 0 && numberalSecond != 0) {
        $task33Result.innerHTML = `Результат - ` + `${numberalSecond} ` + `${numberalThird} `
    }
    else if (numberalFirst == 0 && numberalSecond == 0) {
        $task33Result.innerHTML = `Результат - ` + `${numberalThird} `
    }
    else if (numberalFirst > 9 || numberalSecond > 9 || numberalThird > 9) {
        $task33Result.innerHTML = `Введите пожалуйста цифры, а не числа.`
    }
    else {
        $task33Result.innerHTML = `Результат - ` + `${numberalFirst} ` + `${numberalSecond} ` + `${numberalThird} `
    }
}

$task33Btn.onclick = getResult33

//////////////////////////////////////////////////////////////////////////////////

let $title34 = document.createElement('h1')
$title34.innerHTML = 'Задание 4.4 - Написать функцию, которая принимает длину и ширину прямоугольника и вычисляет его площадь. Если в функцию передали 1 параметр, то она вычисляет площадь квадрата.'
$title34.style = 'color: #666; font-size: 20px; margin: 15px 0 0 0'
document.body.append($title34)

let $task34 = document.createElement('div')
$task34.classList.add('task34')
$task34.innerHTML = '<input class="input__number1" placeholder="Длина" type="number"></input><input class="input__number2" placeholder="Ширина" type="number"></input><button>Посчитать</button>'

let $task34Result = document.createElement('div')
$task34Result.classList.add('result')
$task34.append($task34Result)

document.body.append($task34)
let $task34Btn = document.querySelector('.task34 button')
let $task34Field1 = document.querySelector('.task34 .input__number1')
let $task34Field2 = document.querySelector('.task34 .input__number2')
$task34Result = document.querySelector('.task34 .result')

function getResult34() {
    let numberLength = Number($task34Field1.value),
        numberWidth = Number($task34Field2.value)
    if (numberLength == "") numberLength = numberWidth
    else if (numberWidth == "") numberWidth = numberLength
    $task34Result.innerHTML = `Площадь квадрата = ${numberLength * numberWidth} `

}

$task34Btn.onclick = getResult34

///////////////////////////////////////////////////////////////////////////////////

let $title35 = document.createElement('h1')
$title35.innerHTML = 'Задание 4.5 - Написать функцию, которая проверяет, является ли переданное ей число совершенным.'
$title35.style = 'color: #666; font-size: 20px; margin: 15px 0 0 0'
document.body.append($title35)

let $task35 = document.createElement('div')
$task35.classList.add('task35')
$task35.innerHTML = '<input class="input__number" placeholder="" type="number"></input><button>Посчитать</button>'

let $task35Result = document.createElement('div')
$task35Result.classList.add('result')
$task35.append($task35Result)

document.body.append($task35)
let $task35Btn = document.querySelector('.task35 button')
let $task35Field1 = document.querySelector('.task35 .input__number')
$task35Result = document.querySelector('.task35 .result')

function getPerfectNumber() {
    let number = $task35Field1.value
    let result = 0
    for (let i = 1; i < number; i++) {
        if (number % i == 0) {
            result += i
        }
    }
    if (number == result) {
        $task35Result.innerHTML = `${result} - Данное число является совершенным`
    } else {
        $task35Result.innerHTML = `Данное число не является совершенным`
    }
}

$task35Btn.onclick = getPerfectNumber

///////////////////////////////////////////////////////////////////////////////////

let $title36 = document.createElement('h1')
$title36.innerHTML = 'Задание 4.6 - Написать функцию, которая проверяет, является ли переданное ей число совершенным.'
$title36.style = 'color: #666; font-size: 20px; margin: 15px 0 0 0'
document.body.append($title36)

let $task36 = document.createElement('div')
$task36.classList.add('task36')
$task36.innerHTML = '<input class="input__number1" placeholder="Начало диапазона" type="number"><input class="input__number2" placeholder="Конец диапазона" type="number"></input><button>Посчитать</button>'

let $task36Result = document.createElement('div')
$task36Result.classList.add('result')
$task36.append($task36Result)

document.body.append($task36)
let $task36Btn = document.querySelector('.task36 button')
$task36Result = document.querySelector('.task36 .result')

function searchPerfectNumber(numberStart, numberEnd) {
    let numberRange = ''
    let result = 0
    for (let i = numberStart; i <= numberEnd; i++) {
        result = 0
        for (let j = 1; j < i; j++) {
            if (i % j == 0) result += j
        }
        if (i == result) numberRange += i + ' '
    }
    return 'Cовершенные числа - ' + `${numberRange}`
}
$task36Btn.addEventListener('click', () => {
    let start = document.querySelector('.task36 .input__number1')
    let end = document.querySelector('.task36 .input__number2')
    $task36Result.innerHTML = searchPerfectNumber(Number(start.value), Number(end.value))
})

////////////////////////////////////////////////////////////////////////////////////

let $title37 = document.createElement('h1')
$title37.innerHTML = 'Задание 4.7 - Написать функцию, которая принимает время (часы, минуты, секунды) и выводит его на экран в формате «чч:мм:сс».Если при вызове функции минуты и/или секунды не были переданы, то выводить их как 00.'
$title37.style = 'color: #666; font-size: 20px; margin: 15px 0 0 0'
document.body.append($title37)

let $task37 = document.createElement('div')
$task37.classList.add('task37')
$task37.innerHTML = '<input class="input__number1" placeholder="Часы" type="number"></input><input class="input__number2" placeholder="Минуты" type="number"></input><input class="input__number3" placeholder="Секунды" type="number"></input><button>Вывести</button>'

let $task37Result = document.createElement('div')
$task37Result.classList.add('result')
$task37.append($task37Result)

document.body.append($task37)
let $task37Btn = document.querySelector('.task37 button')
let $task37Field1 = document.querySelector('.task37 .input__number1')
let $task37Field2 = document.querySelector('.task37 .input__number2')
let $task37Field3 = document.querySelector('.task37 .input__number3')
$task37Result = document.querySelector('.task37 .result')

function getResult37(hour, minute, second) {
    hour = Number($task37Field1.value)
    minute = Number($task37Field2.value)
    second = Number($task37Field3.value)
    if (hour < 10) hour = "0" + hour
    if (minute < 10) minute = "0" + minute
    if (second < 10) second = "0" + second
    $task37Result.innerHTML = `${hour}: ${minute}: ${second} `
    if ((hour > 23 || hour < 0) || (minute > 59 || minute < 0) || (second > 59 || second < 0))
        $task37Result.innerHTML = `Вы что - то ввели не так.Попробуйте ещё раз.`
}

$task37Btn.onclick = getResult37

////////////////////////////////////////////////////////////////////////////////////////

let $title38 = document.createElement('h1')
$title38.innerHTML = 'Задание 4.8 - Написать функцию, которая принимает часы, минуты и секунды и возвращает это время в секундах.'
$title38.style = 'color: #666; font-size: 20px; margin: 15px 0 0 0'
document.body.append($title38)

let $task38 = document.createElement('div')
$task38.classList.add('task38')
$task38.innerHTML = '<input class="input__number1" placeholder="Часы" type="number"></input><input class="input__number2" placeholder="Минуты" type="number"><input class="input__number3" placeholder="Секунды" type="number"></input><button>Посчитать</button>'

let $task38Result = document.createElement('div')
$task38Result.classList.add('result')
$task38.append($task38Result)

document.body.append($task38)
let $task38Btn = document.querySelector('.task38 button')
let $task38Field1 = document.querySelector('.task38 .input__number1')
let $task38Field2 = document.querySelector('.task38 .input__number2')
let $task38Field3 = document.querySelector('.task38 .input__number3')
$task38Result = document.querySelector('.task38 .result')

function getResult38(hour, minute, second, result) {
    hour = Number($task38Field1.value)
    minute = Number($task38Field2.value)
    second = Number($task38Field3.value)
    result = (hour * 60) * 60 + minute * 60 + second
    $task38Result.innerHTML = `Результат - ${result} секунд`
    if ((hour > 23 || hour < 0) || (minute > 59 || minute < 0) || (second > 59 || second < 0))
        $task38Result.innerHTML = `Вы что - то ввели не так.Попробуйте ещё раз.`

}

$task38Btn.onclick = getResult38

////////////////////////////////////////////////////////////////////////////////////

let $title39 = document.createElement('h1')
$title39.innerHTML = 'Задание 4.9 - Написать функцию, которая принимает количество секунд, переводит их в часы, минуты и секунды и возвращает в виде строки «чч:мм:сс».'
$title39.style = 'color: #666; font-size: 20px; margin: 15px 0 0 0'
document.body.append($title39)

let $task39 = document.createElement('div')
$task39.classList.add('task39')
$task39.innerHTML = '<input class="input__number1" placeholder="Секунды" type="number"></input><button>Посчитать</button>'

let $task39Result = document.createElement('div')
$task39Result.classList.add('result')
$task39.append($task39Result)

document.body.append($task39)
let $task39Btn = document.querySelector('.task39 button')
let $task39Field1 = document.querySelector('.task39 .input__number1')
$task39Result = document.querySelector('.task39 .result')

function getResult39(number, hour, minute, second) {
    number = Number($task39Field1.value)
    hour = Math.floor(number / 60 / 60)
    minute = Math.floor(number / 60) % 60
    second = number % 60
    $task39Result.innerHTML = `${hour}: ${minute}: ${second} `
}

$task39Btn.onclick = getResult39

/////////////////////////////////////////////////////////////////////////////////////

let $title40 = document.createElement('h1')
$title40.innerHTML = 'Задание 4.10 - Написать функцию, которая считает разницу между датами.'
$title40.style = 'color: #666; font-size: 20px; margin: 15px 0 0 0'
document.body.append($title40)

let $task40_1 = document.createElement('div')
$task40_1.classList.add('task40_1')
$task40_1.innerHTML = '<input class="input__number1" placeholder="Часы" type="number"></input><input class="input__number2" placeholder="Минуты" type="number"><input class="input__number3" placeholder="Секунды" type="number"></input>'

let $task40_1Result = document.createElement('div')
$task40_1Result.classList.add('result')
$task40_1.append($task40_1Result)

document.body.append($task40_1)
let $task40_1Field1 = document.querySelector('.task40_1 .input__number1')
let $task40_1Field2 = document.querySelector('.task40_1 .input__number2')
let $task40_1Field3 = document.querySelector('.task40_1 .input__number3')


let $task40_2 = document.createElement('div')
$task40_2.classList.add('task40_2')
$task40_2.innerHTML = '<input class="input__number1" placeholder="Часы" type="number"></input><input class="input__number2" placeholder="Минуты" type="number"><input class="input__number3" placeholder="Секунды" type="number"></input>'

document.body.append($task40_2)
let $task40_2Field1 = document.querySelector('.task40_2 .input__number1')
let $task40_2Field2 = document.querySelector('.task40_2 .input__number2')
let $task40_2Field3 = document.querySelector('.task40_2 .input__number3')

let $task40 = document.createElement('div')
$task40.classList.add('task40')
$task40.innerHTML = '<button>Посчитать</button>'

let $task40Result = document.createElement('div')
$task40Result.classList.add('result')
$task40.append($task40Result)

document.body.append($task40)
let $task40Btn = document.querySelector('.task40 button')
$task40Result = document.querySelector('.task40 .result')

function getResult40(hour1, minute1, second1, hour2, minute2, second2) {
    hour1 = Number($task40_1Field1.value)
    minute1 = Number($task40_1Field2.value)
    second1 = Number($task40_1Field3.value)
    hour2 = Number($task40_2Field1.value)
    minute2 = Number($task40_2Field2.value)
    second2 = Number($task40_2Field3.value)
    let hour = hour1 - hour2,
        minute = minute1 - minute2,
        second = second1 - second2
    if (hour < 10) hour = "0" + hour
    if (minute < 10) minute = "0" + minute
    if (second < 10) second = "0" + second
    $task40Result.innerHTML = `Результат - ${hour}: ${minute}: ${second} `
}

$task40Btn.onclick = getResult40

/////////////////////////////////////////////////////////////////////////////////////