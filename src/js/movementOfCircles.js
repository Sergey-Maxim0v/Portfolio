import getRandom from "./getRandom";


function movementOfCircles(circle, minXY, maxXY, time) {
  setInterval(() => {
    circle.style.left = `${getRandom(minXY, maxXY)}%`
    circle.style.top = `${getRandom(minXY, maxXY)}%`
  }, time)
}

export default movementOfCircles