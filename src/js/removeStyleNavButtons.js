const arrNodeNavBarButtons = document.querySelectorAll('.navBarSec')

function removeStyleNavButtons(style) {
  for (let el of arrNodeNavBarButtons) {
    el.classList.remove(style);
  }
}

export default removeStyleNavButtons
