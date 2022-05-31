import movementOfCircles from "./movementOfCircles";
import changeOfSize from "./changeOfSize";
import state from "./state";

const {
  circle1,
  circle2,
  circle3,
  circle4,
  circle5,
} = state

function circlesAnimation() {
  movementOfCircles(circle1, -20, 70)
  changeOfSize(circle1, 30, 60)
  movementOfCircles(circle2, -20, 70)
  changeOfSize(circle2, 10, 100)
  movementOfCircles(circle3, -20, 70)
  changeOfSize(circle3, 40, 80)
  movementOfCircles(circle3, 0, 70)
  changeOfSize(circle3, 40, 80)
  movementOfCircles(circle4, 0, 70)
  changeOfSize(circle4, 40, 80)
  movementOfCircles(circle5, 0, 70)
  changeOfSize(circle5, 40, 80)
}

export default circlesAnimation