import scrollingWorks from "./scrollingWorks";

function animatingPages(index){
	if(index === 0 ) {
		console.log('animation for section 0')
	}
	if(index === 1 ) {
		console.log('animation for section 1')
	}
	if(index === 2 ) {
		scrollingWorks()
	}
	if(index === 3 ) {
		console.log('animation for section 3')
	}
}
export default animatingPages
