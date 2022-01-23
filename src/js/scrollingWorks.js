const projects = document.querySelector('.section3Projects')
const leftBtn = document.querySelector('.section3BtnLeft')
const rightBtn = document.querySelector('.section3BtnRight')
const projectsAmount = document.querySelectorAll('.section3Project').length

let scrollWorksIndex = 0

const scrollingWorks = () => {

	worksButtonOpacity(scrollWorksIndex)

	leftBtn.addEventListener('click', () => worksGoLeft())
	rightBtn.addEventListener('click', () => worksGoRight())
	document.addEventListener('keyup', scrollWorksKeysArrows)
}

function worksButtonOpacity(scrollWorksIndex) {
	if (scrollWorksIndex === 0) {
		leftBtn.style.opacity = '0.3'
	}
	if (scrollWorksIndex === projectsAmount - 2) {
		rightBtn.style.opacity = '0.3'
	}

}

function worksGoRight() {
	leftBtn.style.opacity = '1'
	if (scrollWorksIndex < projectsAmount - 2) {
		scrollWorksIndex += 1
		projects.style.transform = `translateX(-${scrollWorksIndex * 300}px)`;
	}
	worksButtonOpacity(scrollWorksIndex)
}

function worksGoLeft() {
	rightBtn.style.opacity = '1'
	if (scrollWorksIndex > 0) {
		scrollWorksIndex -= 1
		projects.style.transform = `translateX(-${scrollWorksIndex * 300}px)`;
	}
	worksButtonOpacity(scrollWorksIndex)
}

export function scrollWorksKeysArrows(event) {
	if (event.key === 'ArrowRight') {
		worksGoRight()
	}
	if (event.key === 'ArrowLeft') {
		worksGoLeft()
	}
}

export default scrollingWorks
