document.querySelector('h1').onclick = () => {
  alert('За деньги да!')
}

const tableCells = Array.from(
  document.querySelectorAll('.seminars tr td:nth-child(2)')
)

const firstTermSeminard = [
  'Основы языка HTML',
  'Формы и кнопки в HTML',
  'Таблицы и интерактивные элементы HTML',
  'Основы работы с CSS',
  'Работа с классами в CSS',
  'Работа с сетками и разметкой в HTML',
  'Адаптивная верстка',
  'Bootstrap',
  'Основы языка JavaScript',
  'Базовые задачи на JS',
  'DOM-структура приложений и работа с объектами в языке JS',
  'Встраивание скриптов',
  'Отладка сценариев',
  'Анимация и работа с ними',
  'Github',
  'Защита проекта',
]

const secondTermSeminars = [
  'Базовое бэкенд-приложение',
  'HTTP-запросы',
  'JSON и работа с ним',
  'HTTP-ответы',
  'Проектирование API',
  'Роутинг и его настройка',
  'NoSQL базы данных',
  'Обеспечение авторизации и доступа пользователей',
  'Работа сторонних сервисов уведомления и авторизации',
  'Основы ReactJS',
  'Работа с компонентами динамической DOM',
  'Использование хуков в React',
  '',
  'Основы микросервисной архитектуры',
  'Разработка классических модулей веб-приложений',
  'Разработка классических модулей веб-приложений',
]

document.querySelector('.firstTerm').onclick = () => {
  document.querySelector('.switchTerms').classList.remove('secondActive')
  tableCells.forEach((element, index) => {
    element.innerHTML = firstTermSeminard[index]
  })
}

document.querySelector('.secondTerm').onclick = () => {
  document.querySelector('.switchTerms').classList.add('secondActive')
  tableCells.forEach((element, index) => {
    element.innerHTML = secondTermSeminars[index]
  })
}

document.querySelector('#logoImg').addEventListener('mouseover', (event) => {
  event.preventDefault()
  event.target.style.transform = 'scale(1.1)'
})

document.querySelector('#logoImg').addEventListener('mouseleave', (event) => {
  event.preventDefault()
  event.target.style.transform = 'scale(1)'
})

document.querySelector('#logoImg').addEventListener('click', (event) => {
  event.preventDefault()
  event.target.setAttribute(
    'src',
    'https://avatars.mds.yandex.net/i?id=4de92485268ec3376ab7881827630056620c7797-5430182-images-thumbs&n=13'
  )
})

document.querySelector('#logoImg').addEventListener('dblclick', (event) => {
  event.preventDefault()
  alert('Котики закончились')
})
