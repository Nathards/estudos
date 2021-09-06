                     /* OPEN AND CLOSE MENU*/

const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle) {
    element.addEventListener('click', function () {
      nav.classList.toggle('show')
    })
  }

  /* AFTER CLICK CLOSE MENU */

  const links = document.querySelectorAll('nav ul li a');

  for(const link of links) {
      link.addEventListener('click', function () {
          nav.classList.remove('show')
      })
  }

  /* change page header when scrolling */

  const header =  document.querySelectorAll('#header')
  const navHeight= header.offsetHeight
  function changeHeaderWhenScrolling() {
      if (window.scrollY >= navHeight) {
          header.classList.add('scroll')
      } else {
          header.classList.remove('scroll')
      }
  }
