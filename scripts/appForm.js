const form = document.querySelector('form') // Выбирайте форму по селектору

form.addEventListener('submit', async (e) => {
  e.preventDefault() // Предотвращаем отправку формы по умолчанию

  var formData = new FormData(e.target)
  const formProps = Object.fromEntries(formData)
  formProps.printData = function () {
    console.log(`Имя: ${this.fullName}`)
    console.log(`E-mail: ${this.email}`)
    console.log(`Телефон: ${this.phoneNumber}`)
    console.log(`Дата: ${this.currentDate}`)
    console.log(`Комментарий: ${this.comment}`)
  }

  const response = await fetch('/services.html/submitForm', {
    method: 'POST',
    headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
    body: JSON.stringify(formProps),
  })

  console.log(response)

  formProps.printData()

  console.log(formProps)

  let errorOnFilling = false
  let errorOnEmail = false

  // Выбираем все поля ввода в форме
  const inputs = document.querySelectorAll('input, textarea')

  inputs.forEach((el) => {
    el.addEventListener('click', (e) => {
      e.target.style.borderColor = 'black'
    })
  })

  inputs.forEach((el) => {
    if (el.value.trim() === '') {
      // Проверяем значение каждого поля ввода
      errorOnFilling = true
      el.style.borderColor = 'red'
    } else {
      if (el.getAttribute('type') == 'email') {
        const regex = /.+@.+\.(ru|com)$/
        if (!regex.test(el.value.trim())) {
          el.style.borderColor = 'red'
          errorOnEmail = true
        }
      } else el.style.borderColor = 'black'
    }
  })

  const select = document.querySelector('select')
  if (select.selectedIndex == 0) {
    errorOnFilling = true
    select.style.borderColor = 'red'
  } else {
    select.style.borderColor = 'black'
  }
  const checkbox = document.querySelector('#checkbox')
  if (!checkbox.checked) {
    errorOnFilling = true
    checkbox.style.borderColor = 'red'
  } else {
    checkbox.style.borderColor = 'black'
  }

  if (!errorOnFilling && !errorOnEmail) {
    const thanks = document.querySelector('.thanks')
    thanks.style.display = 'block'
    setTimeout(function () {
      thanks.style.display = 'none'
      document.querySelector('.body').classList.toggle('bodyDarken')
      document.querySelector('.form').classList.toggle('show')
    }, 3000)
  } else {
    if (errorOnEmail) {
      alert('Введите верную почту')
    } else alert('Заполните все поля!')
  }
})

document.querySelector('.close-button').onclick = () => {
  document.querySelector('.body').classList.toggle('bodyDarken')
  document.querySelector('.form').classList.toggle('show')
}
