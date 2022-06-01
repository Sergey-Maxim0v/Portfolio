const nodeContent = document.querySelector('.section3Content')
const nodeBtn = document.querySelector('.section3Btn')
const nodeProjectsRow = document.querySelector('.section3ProjectsRow')

const setSection3ProjectStyles = () => {
  const maxWidth = nodeContent.offsetWidth - (nodeBtn.clientWidth * 2) - 1
  const width = maxWidth - (maxWidth % 300)

  nodeProjectsRow.style.maxWidth = `${width}px`
}

export default setSection3ProjectStyles