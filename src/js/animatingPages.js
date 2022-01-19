import scrollingWorks from "./scrollingWorks";

let section0Status = false
let section1Status = false
let section2Status = false
let section3Status = false

function animatingPages(index) {

	if (index === 0) {
		if (!section0Status) {
			console.log('animation for section 0')
		}
		section0Status = true
	}

	if (index === 1) {
		if (!section1Status) {
			console.log('animation for section 1')
		}
		section1Status = true
	}

	if (index === 2) {
		if (!section2Status) {
			scrollingWorks()
		}
		section2Status = true
	}

	if (index === 3) {
		if (!section3Status) {
			console.log('animation for section 3')
		}
		section3Status = true
	}
}

export default animatingPages
