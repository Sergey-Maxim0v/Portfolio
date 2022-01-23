import scrollingWorks from "./scrollingWorks";
import removeSectionlisteners from "./removeSectionlisteners";

let section2Status = false

function animatingPages(index) {

	if (index === 0) {
		console.log('animation for section 0')
	}

	if (index === 1) {
		console.log('animation for section 1')
	}

	if (index === 2) {
		// if(!section2Status){
			scrollingWorks()
	// 	}
	// 	section2Status = true
	}

	if (index === 3) {
		console.log('animation for section 3')
	}
}

export default animatingPages
