const arrNodeNavBarButtons = document.querySelectorAll('.navBarSec')

function clickNavbarBtns() {
  for (let i = 0; i < arrNodeNavBarButtons.length; i++) {
    arrNodeNavBarButtons[i].addEventListener('click', (event) => {
      if (event) {
        const clientHeight = document.documentElement.clientHeight

        window.scrollTo({top: clientHeight * i, behavior: "smooth"})
      }
    })
  }
}

export default clickNavbarBtns