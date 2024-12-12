const showMessage = (line) => {
  console.log(line)
}

const changeBackgroundColor = (color) => {
  document.querySelector('body').style.backgroundColor = color
}

const toggleVisibility = (selector) => {
  document.querySelector(selector).classList.toggle('hide')
}

const setH1ToUTM_TERM = () => {
  const urlParams = new URLSearchParams(window.location.search)
  const myParam = urlParams.get('utm_term')

  myParam && (document.querySelector('h1').innerText = myParam)
}

const logCurrentTime = () => {
  const currentDate = new Date()
  console.log(
    currentDate.getHours() +
      ':' +
      currentDate.getMinutes() +
      ':' +
      currentDate.getSeconds()
  )
}

const resetBackgroundColor = () => {
  document.querySelector('body').style.backgroundColor = 'initial'
}

showMessage('Скрипт загружен!')
logCurrentTime()

document.addEventListener('DOMContentLoaded', () => {
  changeBackgroundColor('lightblue')
  setTimeout(() => {
    setH1ToUTM_TERM()
    toggleVisibility('.content')
    resetBackgroundColor()
  }, 1000)
})
