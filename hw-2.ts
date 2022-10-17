// Протипизировать данные
// используйте все возможные типы для типизации, включая пользовательские типы
type Faculties = Array<Faculty>
type Faculty = {
    id: number,
    faculty: string,
    countStudents: number,
    subjects: string[]
}
const faculties: Faculties = [
    {
        id: 1,
        faculty: "History department",
        subjects: ["The World History", "History of Rome"],
        countStudents: 44
    },
    {
        id: 2,
        faculty: "Department of Biology",
        subjects: ["biology", "chemistry"],
        countStudents: 50
    },
    {
        id: 3,
        faculty: "Faculty of Mathematics",
        subjects: ["mathematics", "geometry", "trigonometry"],
        countStudents: 72
    },
    {
        id: 4,
        faculty: "Faculty of Design",
        subjects: ["ui", "ux", "graphic design"],
        countStudents: 37
    }
]

type Movies = Array<Movie>
type Movie = {
    id: number,
    title: string,
    year: number,
    released: string,
    runtime: string,
    genre: string[],
    director: string,
    writer: string,
    actors: string[],
    plot: string,
    country: string,
    poster: string,
    imdbRating: number,
    imdbVotes: number,
    type: string,
    boxOffice: string,
    production: string
}
const movie: Movies = [
    {
        id: 1,
        title: "Black Widow",
        year: 2021,
        released: "09 Jul 2021",
        runtime: "134 min",
        genre: ["Action", "Sci-Fi", "Adventure"],
        director: "Cate Shortland",
        writer: "Eric Pearson, Jac Schaeffer, Ned Benson",
        actors: ["Scarlett Johansson", "Florence Pugh", "David Harbour"],
        plot: "Natasha Romanoff confronts the darker parts of her ledger when a dangerous conspiracy with ties to her past arises.",
        country: "United States",
        poster: "https://m.media-amazon.com/images/M/MV5BNjRmNDI5MjMtMmFhZi00YzcwLWI4ZGItMGI2MjI0N2Q3YmIwXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg",
        imdbRating: 6.9,
        imdbVotes: 121932,
        type: "movie",
        boxOffice: "$138,027,361",
        production: "Marvel Studios",
    },
    {
        id: 2,
        title: "Harry Potter and the Deathly Hallows: Part 2",
        year: 2011,
        released: "15 Jul 2011",
        runtime: "130 min",
        genre: ["Adventure", "Drama", "Fantasy"],
        director: "David Yates",
        writer: "Steve Kloves, J.K. Rowling",
        actors: ["Daniel Radcliffe", "Emma Watson", "Rupert Grint"],
        plot: "Harry, Ron, and Hermione search for Voldemort's remaining Horcruxes in their effort to destroy the Dark Lord as the final battle rages on at Hogwarts.",
        country: "United Kingdom, United States",
        poster: "https://m.media-amazon.com/images/M/MV5BMGVmMWNiMDktYjQ0Mi00MWIxLTk0N2UtN2ZlYTdkN2IzNDNlXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg",
        imdbRating: 8.1,
        imdbVotes: 790377,
        type: "movie",
        boxOffice: "$381,409,310",
        production: "Heyday Films, Moving Picture Company, Warner Bros.",
    },
]

// homework part2 (hw-1)
type Lessons = 'mathematics' | 'biology' | 'chemistry' | 'geography'
type Subjects = {
    [prop in Lessons]: Subject
}
type Subject = {
    students: number,
    teachers: number
}
const subjects: Subjects = {
    mathematics: {
        students: 200,
        teachers: 6
    },
    biology: {
        students: 120,
        teachers: 6
    },
    chemistry: {
        students: 100,
        teachers: 3
    },
    geography: {
        students: 60,
        teachers: 2
    },
}

//     1. Создать строку из названий предметов написаных через запятую
function getStringWithSubjects(x: Subjects): string | void {
    let stringSub: string = ''

    if (typeof x === 'object') {
        for (let key in x) {
            stringSub = stringSub + key + ', '
        }
    } else {
        return console.log('ошибка')
    }
    return stringSub
}

console.log(getStringWithSubjects(subjects))

//     2. Посчитать общее количество студентов и учителей на всех предметах
function getCountOfStudentsAndTeachers(x: Subjects): number | void {
    let allTeachers: number = 0
    let allStudents: number = 0
    let amountPeople: number
    if (typeof x === 'object') {
        for (let key in x) {
            allTeachers += x[key].teachers
            allStudents += x[key].students
        }
        amountPeople = allTeachers + allStudents
    } else {
        return console.log('ошибка')
    }

    return amountPeople
}
console.log(getCountOfStudentsAndTeachers(subjects))

//     3. Получить среднее количество студентов на всех пердметах
function getAverageAmountStudents(x: Subjects): number | void {
    let allStudents: number = 0
    if (typeof x === 'object') {
        for (let key in x) {
            allStudents += x[key].students
        }
    } else {
        return console.log('ошибка')
    }
    let countSubjects: number = Object.keys(subjects).length;
    let averageAmount: number = allStudents / countSubjects
    return averageAmount
}
console.log(getAverageAmountStudents(subjects))

// По поводу 2 следующих не уверен что правильно! 5 точно не верно

//     4. Создать массив из объектов предметов
function buildArray(x: Subjects): [string, Subject][] | void {
    let arraySubjects: [string, Subject][]
    if (typeof x === 'object') {
        arraySubjects = Object.entries(x)
    } else {
        return console.log('ошибка')
    }
    return arraySubjects
}
console.log(buildArray(subjects))

//     5. Получить массив из предметов и отсортировать по количеству преподавателей на факультете от большего к меньшему
function sortByTeachers(x: void | [string, Subject][]): [string, Subject][] {
    let sortArray: [string, Subject][]
    sortArray = x.sort((a, b) => a.teachers - b.teachers)
    return sortArray
}
console.log(sortByTeachers(buildArray(subjects)))