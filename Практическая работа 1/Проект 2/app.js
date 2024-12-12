let elem = document.getElementById('but1')
let dis
elem.onclick = function () {
  if (document.getElementById('header').style.display == 'none') {
    document.getElementById('header').style.display = dis
  } else {
    dis = document.getElementById('header').style.display
    document.getElementById('header').style.display = 'none'
  }
}
