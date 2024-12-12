const userName = prompt('Введите ваше имя: ')
const age = prompt('Введите ваш возраст: ')
const isAdultLine = age >= 18 ? 'Вы совершеннолетний' : 'Вы не совершеннолетний'
userName && age
  ? alert(`Здравствуйте, ${userName}! Ваш возраст: ${age} лет. ${isAdultLine}`)
  : alert(`Вы не ввели имя и возраст!`)

console.log(`Имя пользователя: ${userName}\nВозраст пользователя: ${age}`)

for (let i = 1; i < 11; i++) {
  console.log(i)
}

let i = 10

while (i > 0) {
  console.log(i--)
}

const lectures = ['Ознакомление', 'Работа', 'Окончание']
const practices = ['Практика 1', 'Практика 2', 'Практика 3']

lectures.push('Тема 4')
practices.push('Практика 4')

lectures.forEach((el) => console.log(el))
practices.forEach((el) => console.log(el))

const func = (array) => array.filter((el) => el.at(0) === 'О')

func(lectures).forEach((el) => console.log(el))
