const projects = document.querySelector('.section3Projects')
const leftBtn = document.querySelector('.section3BtnLeft')
const rightBtn = document.querySelector('.section3BtnRight')

const projectsAmount = document.querySelectorAll('.section3Project').length

let scrollWorksIndex = 0
let maxScrollIndex = projectsAmount

const scrollingWorks = () => {
  changeButtonOpacity(scrollWorksIndex)

  leftBtn.addEventListener('click', () => worksGoLeft())
  rightBtn.addEventListener('click', () => worksGoRight())
  document.addEventListener('keyup', scrollWorksKeysArrows)
}

function changeButtonOpacity(scrollWorksIndex) {
  if (scrollWorksIndex === 0) {
    leftBtn.style.opacity = '0.3'
  }
  if (scrollWorksIndex >= maxScrollIndex) {
    rightBtn.style.opacity = '0.3'
  }
}

function worksGoRight() {
  const rowWidth = document.querySelector('.section3ProjectsRow').offsetWidth
  const projectWidth = document.querySelector('.section3ProjectRow').offsetWidth

  maxScrollIndex = projectsAmount - (rowWidth / projectWidth)

  leftBtn.style.opacity = '1'

  if (scrollWorksIndex < maxScrollIndex) {
    scrollWorksIndex += 1
    projects.style.transform = `translateX(-${scrollWorksIndex * projectWidth}px)`;
  }

  changeButtonOpacity(scrollWorksIndex)
}

function worksGoLeft() {
  const projectWidth = document.querySelector('.section3ProjectRow').offsetWidth

  rightBtn.style.opacity = '1'

  if (scrollWorksIndex > 0) {
    scrollWorksIndex -= 1
    projects.style.transform = `translateX(-${scrollWorksIndex * projectWidth}px)`;
  }

  changeButtonOpacity(scrollWorksIndex)
}

export function scrollWorksKeysArrows(event) {
  if (event.key === 'ArrowRight') {
    worksGoRight()
  }

  if (event.key === 'ArrowLeft') {
    worksGoLeft()
  }
}

export default scrollingWorks
