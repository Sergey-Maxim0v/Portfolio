import {scrollWorksKeysArrows} from "./scrollingWorks";

function removeSectionlisteners() {
	document.removeEventListener('keyup', scrollWorksKeysArrows)
}

export default removeSectionlisteners
