const state = {
	arrNodeNavBarButtons: document.querySelectorAll('.navBarSec'),
	nodeSections: document.querySelector('.sections'),
	height: document.querySelector('.sections').clientHeight,

	activePageIndex: 0,

	setActivePageIndex(n) {
		this.activePageIndex = n
	},

	setActivePage(value) {
		if (value === 'up') {
			if (this.activePageIndex - 1 >= 0) {
				this.activePageIndex -= 1
			}
			this.removeStyleNavButtons('navBarSecActive');
			this.arrNodeNavBarButtons[this.activePageIndex].classList.add('navBarSecActive');
			this.nodeSections.style.transform = `translateY(-${this.activePageIndex * this.height}px)`;
		}
		if (value === 'down') {
			if (this.activePageIndex + 1 <= 3) {
				this.activePageIndex += 1
			}
			this.removeStyleNavButtons('navBarSecActive')
			this.arrNodeNavBarButtons[this.activePageIndex].classList.add('navBarSecActive');
			this.nodeSections.style.transform = `translateY(-${this.activePageIndex * this.height}px)`
		}
		if(this.activePageIndex === 0 ) {
			console.log(0)
		}
		if(this.activePageIndex === 1 ) {
			console.log(1)
		}
		if(this.activePageIndex === 2 ) {
			console.log(2)
		}
		if(this.activePageIndex === 3 ) {
			console.log(3)
		}
	},

	removeStyleNavButtons(style) {
		for (let el of this.arrNodeNavBarButtons) {
			el.classList.remove(style);
		}
	},
}

export default state
