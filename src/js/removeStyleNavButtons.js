import state from "./state"

function removeStyleNavButtons(style) {
	for (let el of state.arrNodeNavBarButtons) {
		el.classList.remove(style);
	}
}

export default removeStyleNavButtons
