import removeStyleNavButtons from "./removeStyleNavButtons";

const arrNodeNavBarButtons = document.querySelectorAll('.navBarSec')

const setStylesNavbar = () => {
  const visibleHeight = document.documentElement.clientHeight
  const scrollTop = document.documentElement.scrollTop
  const visibleSection = Math.round(scrollTop / visibleHeight)

  removeStyleNavButtons('navBarSecActive');
  arrNodeNavBarButtons[visibleSection].classList.add('navBarSecActive');
}

export default setStylesNavbar