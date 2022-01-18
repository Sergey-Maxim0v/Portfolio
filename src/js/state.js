const state = {
	arrNodeNavBarButtons: document.querySelectorAll('.navBarSec'),
	nodeSections: document.querySelector('.sections'),
	height: document.querySelector('.sections').clientHeight,

	activePageIndex: 0,

	setActivePageIndex(n) {
		state.activePageIndex = n;
	},
}

export default state
