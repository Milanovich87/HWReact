// С ниже приведенным массивом решить следующие задачи:
// 1. Все функции и данные должны быть протипизированы
// 2. Создать строку из имен пользователей через запятую
// 3. Посчитать общее количнство машин у пользователей
// 4. Создать функцию, которая бы принимала массив пользователей и отфильтровывала
// пользователей на наличие образования
// 5. Создать функцию, которая бы принимала массив пользователей и отфильтровывала
// пользователей на наличие животных
// 6. Создать функцию, которая бы принимала массив пользователей и отдавала бы  строку с
// названиями марок автомобилей через запятую
type Users = Array<User>
type User = {
    name: string,
    phone: string,
    email: string,
    animals?: string[],
    cars?: string[],
    hasChildren: boolean,
    hasEducation: boolean
}
const users: Users = [
    {
        name: "Harry Felton",
        phone: "(09) 897 33 33",
        email: "felton@gmail.com",
        animals: ["cat"],
        cars: ["bmw"],
        hasChildren: false,
        hasEducation: true
    },
    {
        name: "May Sender",
        phone: "(09) 117 33 33",
        email: "sender22@gmail.com",
        hasChildren: true,
        hasEducation: true
    },
    {
        name: "Henry Ford",
        phone: "(09) 999 93 23",
        email: "ford0@gmail.com",
        cars: ["bmw", "audi"],
        hasChildren: true,
        hasEducation: false
    }
]

// 2. Создать строку из имен пользователей через запятую
const getStringWithName = (array: Users): string => {
    let string: string = array.map(item => item.name).join(', ')

    return string
}
console.log(getStringWithName(users))

// 3. Посчитать общее количнство машин у пользователей

// Тут у меня возникли вопросы, ругается на current.cars, хотя в type User поставил cars?
function getCountCars(array: Users): number {
    let result: number = array.reduce((sum, current) => sum + current.cars.map((item) => item.cars).length, 0)

    return result
}
console.log(getCountCars(users))

// 4. Создать функцию, которая бы принимала массив пользователей и отфильтровывала
// пользователей на наличие образованияй
function getNewArrayHasEducation(array: Users): Users {
    return array.filter(item => item.hasEducation == true)
}
console.log(getNewArrayHasEducation(users))

// 5. Создать функцию, которая бы принимала массив пользователей и отфильтровывала
// пользователей на наличие животных
function getNewArrayAnimals(array: Users): Users {
    return array.filter(item => item.animals)

}
console.log(getNewArrayAnimals(users))

// 6. Создать функцию, которая бы принимала массив пользователей и отдавала бы  строку с
// названиями марок автомобилей через запятую
const getStringWithCars = (users: Users): string => {
    let stringSub: string = users.filter(item => item.cars).map(item => item.cars).join(', ')
    return stringSub
}
console.log(getStringWithCars(users))