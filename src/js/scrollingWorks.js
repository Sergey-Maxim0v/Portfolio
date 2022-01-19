const projects = document.querySelector('.section3Projects')
const leftBtn = document.querySelector('.section3BtnLeft')
const rightBtn = document.querySelector('.section3BtnRight')
const projectsAmount = document.querySelectorAll('.section3Project').length

const scrollingWorks = () => {
	let scrollWorksIndex = 0;

	buttonOpacity(scrollWorksIndex)

	leftBtn.addEventListener('click', () => {
		rightBtn.style.opacity = '1'
		if (scrollWorksIndex > 0) {
			scrollWorksIndex -= 1
			projects.style.transform = `translateX(-${scrollWorksIndex * 300}px)`;
		}
		buttonOpacity(scrollWorksIndex)
	})
	rightBtn.addEventListener('click', () => {
		leftBtn.style.opacity = '1'
		if (scrollWorksIndex < projectsAmount - 2) {
			scrollWorksIndex += 1
			projects.style.transform = `translateX(-${scrollWorksIndex * 300}px)`;
		}
		buttonOpacity(scrollWorksIndex)
	})
}

function buttonOpacity(scrollWorksIndex) {
	if (scrollWorksIndex === 0) {
		leftBtn.style.opacity = '0.3'
	}
	if (scrollWorksIndex === projectsAmount - 2) {
		rightBtn.style.opacity = '0.3'
	}
}

export default scrollingWorks
