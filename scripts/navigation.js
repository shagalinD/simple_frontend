document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()

    const targetId = this.getAttribute('href')
    const targetElement = document.querySelector(targetId)

    // Получаем высоту фиксированного элемента (если есть)
    const headerOffset = 100 //
    const elementPosition =
      targetElement.getBoundingClientRect().top + window.scrollY

    // Вычисляем позицию с учетом смещения
    const offsetPosition = elementPosition - headerOffset

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    })
  })
})

document.querySelectorAll('a[href$="html"]').forEach((element) => {
  if (
    window.location.href.split('/')[
      window.location.href.split('/').length - 1
    ] === element.getAttribute('href')
  ) {
    element.style.backgroundColor = 'rgb(208, 253, 255)'
  }
})

const scrollToTopButton = document.getElementById('scrollToTop')

// Показываем или скрываем кнопку в зависимости от положения прокрутки
window.onscroll = function () {
  if (
    window.innerWidth < 600 &&
    (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500)
  ) {
    scrollToTopButton.style.display = 'block' // Показываем кнопку
  } else {
    scrollToTopButton.style.display = 'none' // Скрываем кнопку
  }
}

// Прокручиваем страницу вверх при нажатии на кнопку
scrollToTopButton.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: 'smooth', // Плавная прокрутка
  })
}
