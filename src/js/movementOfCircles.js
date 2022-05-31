import getRandom from "./getRandom";


function movementOfCircles(circle, minXY, maxXY) {
  setInterval(() => {
    circle.style.left = `${getRandom(minXY, maxXY)}%`
    circle.style.top = `${getRandom(minXY, maxXY)}%`
  }, 7000)
}

export default movementOfCircles