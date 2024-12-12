const userName = prompt('Введите ваше имя: ')
const age = prompt('Введите ваш возраст: ')
const isAdultLine = age >= 18 ? 'Вы совершеннолетний' : 'Вы не совершеннолетний'
userName && age
  ? alert(`Здравствуйте, ${userName}! Ваш возраст: ${age} лет. ${isAdultLine}`)
  : alert(`Вы не ввели имя и возраст!`)

console.log(`Имя пользователя: ${userName}\nВозраст пользователя: ${age}`)

const randomNumber = Math.floor(Math.random() * 10 + 1)

let userAttempt = prompt('Угадайте случайное число: ')

if (userAttempt == randomNumber) {
  alert('Ура! Вы угадали')
} else {
  userAttempt > 5
    ? alert('Введенное число больше 5')
    : alert('Введенное число меньше 5')
}

const password = '12345'
userAttempt = prompt('Введите пароль: ')
if (userAttempt == '') {
  alert('Введенный пароль пустой!')
} else if (password == userAttempt) {
  alert('Доступ разрешен')
} else {
  alert('Доступ запрещен')
}

const firstNumber = prompt('Введите первое число: ')
const secondNumber = prompt('Введите второе число: ')
if (firstNumber == '' || secondNumber == '') {
  alert('Вы не ввели число!')
} else {
  const sign = prompt('Введите знак: ')
  switch (sign) {
    case '+':
      alert(`Результат: ${firstNumber + secondNumber}`)
      break
    case '-':
      alert(`Результат: ${firstNumber - secondNumber}`)
      break
    case '*':
      alert(`Результат: ${firstNumber * secondNumber}`)
      break
    case '/':
      alert(`Результат: ${firstNumber / secondNumber}`)
      break
    default:
      alert('Неверный знак!')
      break
  }
}
