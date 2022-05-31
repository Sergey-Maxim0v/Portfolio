import removeStyleNavButtons from "./removeStyleNavButtons";
import moveTitleSection1BackGround from "./moveTitleSection1BackGround";
import scrollingWorks from "./scrollingWorks";
import circlesAnimation from "./circlesAnimation";

const arrNodeNavBarButtons = document.querySelectorAll('.navBarSec')
const navBtnUp = document.querySelector('.navBtnUp')
const navBtnDown = document.querySelector('.navBtnDown')

arrNodeNavBarButtons[0].classList.add('navBarSecActive')

moveTitleSection1BackGround()
scrollingWorks()
circlesAnimation()
clickNavBar()
pushKeyArrows()
pushNavBtns()

// push Key Arrows

function pushKeyArrows() {
  document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowUp' || event.key === 'ArrowDown' || event.key === ' ') {
      event.preventDefault()
    }
  })

  document.addEventListener('keyup', (event) => {
    const visibleHeight = document.documentElement.clientHeight
    const scrollTop = document.documentElement.scrollTop
    const visibleSection = Math.round(scrollTop / visibleHeight)

    if (event.key === 'ArrowUp') {
      window.scrollTo({top: visibleHeight * (visibleSection - 1), behavior: "smooth"})
    }

    if (event.key === 'ArrowDown' || event.key === ' ') {
      window.scrollTo({top: visibleHeight * (visibleSection + 1), behavior: "smooth"})
    }
  })
}

// push Nav Buttons

function pushNavBtns() {
  navBtnUp.addEventListener('click', () => {
    const visibleHeight = document.documentElement.clientHeight
    const scrollTop = document.documentElement.scrollTop
    const visibleSection = Math.round(scrollTop / visibleHeight)

    window.scrollTo({
      top: visibleHeight * (visibleSection - 1),
      behavior: "smooth"
    });
  })

  navBtnDown.addEventListener('click', () => {
    const visibleHeight = document.documentElement.clientHeight
    const scrollTop = document.documentElement.scrollTop
    const visibleSection = Math.round(scrollTop / visibleHeight)

    window.scrollTo({
      top: visibleHeight * (visibleSection + 1),
      behavior: "smooth"
    });
  })
}

// click NavBar

function clickNavBar() {
  for (let i = 0; i < arrNodeNavBarButtons.length; i++) {
    arrNodeNavBarButtons[i].addEventListener('click', (event) => {
      if (event) {
        const visibleHeight = document.documentElement.clientHeight

        window.scrollTo({top: visibleHeight * i, behavior: "smooth"})
      }
    })
  }
}

// styles nav. buttons

document.addEventListener('scroll', () => {
  const visibleHeight = document.documentElement.clientHeight
  const scrollTop = document.documentElement.scrollTop
  const visibleSection = Math.round(scrollTop / visibleHeight)

  removeStyleNavButtons('navBarSecActive');
  arrNodeNavBarButtons[visibleSection].classList.add('navBarSecActive');
})
