const title = document.querySelector('.section1Title')
const width = document.querySelector('body').clientWidth

const moveTitleSection1BackGround = () => {
  let userMouseX = 0
  document.addEventListener('mousemove', (event) => {
    userMouseX = event.clientX
    title.style.backgroundPositionX = `${100 - (userMouseX / width * 100)}%`
  })
}

export default moveTitleSection1BackGround