import removeStyleNavButtons from "./removeStyleNavButtons";
import animatingPages from "./animatingPages";

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
			removeStyleNavButtons('navBarSecActive');
			this.arrNodeNavBarButtons[this.activePageIndex].classList.add('navBarSecActive');
			this.nodeSections.style.transform = `translateY(-${this.activePageIndex * this.height}px)`;
		}
		if (value === 'down') {
			if (this.activePageIndex + 1 <= 3) {
				this.activePageIndex += 1
			}
			removeStyleNavButtons('navBarSecActive')
			this.arrNodeNavBarButtons[this.activePageIndex].classList.add('navBarSecActive');
			this.nodeSections.style.transform = `translateY(-${this.activePageIndex * this.height}px)`
		}
		animatingPages(this.activePageIndex)
	},
}

export default state
