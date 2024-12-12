const but = document.querySelectorAll('.image')

but.forEach((el) => {
  el.onclick = () => {
    document.querySelector('.form').classList.toggle('show')
  }
})

document.querySelector('h2').style.color = 'red'
document.querySelector('h2').innerHTML = 'Добро пожаловать на наш сайт!'
document.querySelector('p').innerHTML = 'pupu'

document.querySelector('.image1').onclick = (event) => {
  const startX = event.clientX
  const startY = event.clientY
  const form = document.querySelector('.form')

  form.style.setProperty('--start-top', `${startY}px)`)
  form.style.setProperty('--start-left', `${startX}px`)

  form.classList.toggle('show')
  document.querySelector('.body').classList.toggle('bodyDarken')
  console.log('Переход по заказу один')
}

document.querySelector('.image2').onclick = (event) => {
  const startX = event.clientX
  const startY = event.clientY
  const form = document.querySelector('.form')

  form.style.setProperty('--start-top', `${startY}px)`)
  form.style.setProperty('--start-left', `${startX}px`)

  form.classList.toggle('show')
  document.querySelector('.body').classList.toggle('bodyDarken')
  console.log('Переход по заказу два')
}

document.querySelector('.image3').onclick = (event) => {
  const startX = event.clientX
  const startY = event.clientY
  const form = document.querySelector('.form')

  form.style.setProperty('--start-top', `${startY}px)`)
  form.style.setProperty('--start-left', `${startX}px`)

  form.classList.toggle('show')
  document.querySelector('.body').classList.toggle('bodyDarken')
  console.log('Переход по заказу три')
}
