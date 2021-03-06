import movementOfCircles from "./movementOfCircles";
import changeOfSize from "./changeOfSize";

const circle1 = document.querySelector('.circle_1')
const circle2 = document.querySelector('.circle_2')
const circle3 = document.querySelector('.circle_3')
const circle4 = document.querySelector('.circle_4')
const circle5 = document.querySelector('.circle_5')

function circlesAnimation() {
  movementOfCircles(circle1, -20, 70, 7000)
  changeOfSize(circle1, 30, 60)
  movementOfCircles(circle2, -20, 70, 7500)
  changeOfSize(circle2, 10, 100)
  movementOfCircles(circle3, -20, 70, 8500)
  changeOfSize(circle3, 40, 80)
  movementOfCircles(circle4, 0, 70, 6000)
  changeOfSize(circle4, 40, 80)
  movementOfCircles(circle5, 0, 70, 6000)
  changeOfSize(circle5, 40, 80)
}

export default circlesAnimation