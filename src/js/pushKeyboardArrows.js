function pushKeyboardArrows() {
  document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowUp' || event.key === 'ArrowDown' || event.key === ' ') {
      event.preventDefault()
    }
  })

  document.addEventListener('keyup', (event) => {
    const clientHeight = document.documentElement.clientHeight
    const scrollTop = document.documentElement.scrollTop
    const heightSection = Math.round(scrollTop / clientHeight)

    if (event.key === 'ArrowUp') {
      window.scrollTo({top: clientHeight * (heightSection - 1), behavior: "smooth"})
    }

    if (event.key === 'ArrowDown' || event.key === ' ') {
      window.scrollTo({top: clientHeight * (heightSection + 1), behavior: "smooth"})
    }
  })
}

export default pushKeyboardArrows