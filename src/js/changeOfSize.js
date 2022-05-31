import getRandom from "./getRandom";

function changeOfSize(element, minSize, maxSize) {
  setInterval(() => {
    const size = getRandom(minSize, maxSize)

    element.style.width = `${size}vh`
    element.style.height = `${size}vh`
  }, 3000)
}

export default changeOfSize