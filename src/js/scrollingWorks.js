const scrollingWorks = () => {
	const projects = document.querySelector('.section3Projects')
	const leftBtn = document.querySelector('.section3BtnLeft')
	const rightBtn = document.querySelector('.section3BtnRight')
	const projectsAmount = document.querySelectorAll('.section3Project').length

	let scrollWorksIndex = 0;

	leftBtn.addEventListener('click', () => {
		if (scrollWorksIndex > 0) {
			scrollWorksIndex--
			projects.style.transform = `translateX(-${scrollWorksIndex * 300}px)`;
		}
	})
	rightBtn.addEventListener('click', () => {
		if (scrollWorksIndex < projectsAmount - 1) {
			scrollWorksIndex++
			projects.style.transform = `translateX(-${scrollWorksIndex * 300}px)`;
		}
	})
}

export default scrollingWorks
