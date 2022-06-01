const nodeProjectsRow = document.querySelector('.section3ProjectsRow')


const setSection3ProjectStyles = () => {
  const contentWidth = document.querySelector('.section3Content')
  const btnWidth = document.querySelector('.section3Btn')

  const projectWidth = document.querySelector('.section3ProjectRow').offsetWidth

  const maxWidth = contentWidth.offsetWidth - (btnWidth.clientWidth * 2) - 1
  const width = maxWidth - (maxWidth % projectWidth)

  nodeProjectsRow.style.maxWidth = `${width >= projectWidth ? width : projectWidth}px`
}

export default setSection3ProjectStyles