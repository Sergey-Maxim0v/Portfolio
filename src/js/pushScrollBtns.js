const navBtnUp = document.querySelector('.navBtnUp')
const navBtnDown = document.querySelector('.navBtnDown')

function pushScrollBtns() {
  navBtnUp.addEventListener('click', () => {
    const clientHeight = document.documentElement.clientHeight
    const scrollTop = document.documentElement.scrollTop
    const heightSection = Math.round(scrollTop / clientHeight)

    window.scrollTo({
      top: clientHeight * (heightSection - 1),
      behavior: "smooth"
    });
  })

  navBtnDown.addEventListener('click', () => {
    const clientHeight = document.documentElement.clientHeight
    const scrollTop = document.documentElement.scrollTop
    const heightSection = Math.round(scrollTop / clientHeight)

    window.scrollTo({
      top: clientHeight * (heightSection + 1),
      behavior: "smooth"
    });
  })
}

export default pushScrollBtns