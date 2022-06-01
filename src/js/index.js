import moveTitleSection1BackGround from "./moveTitleSection1BackGround";
import scrollingWorks from "./scrollingWorks";
import circlesAnimation from "./circlesAnimation";
import setStylesNavbar from "./setStylesNavbar";
import pushKeyboardArrows from "./pushKeyboardArrows";
import pushScrollBtns from "./pushScrollBtns";
import clickNavbarBtns from "./clickNavbarBtns";
import setSection3ProjectStyles from "./setSection3ProjectStyles";


// init scripts
setStylesNavbar()
// setSection3ProjectStyles()

// background
circlesAnimation()

// scroll
pushScrollBtns()
pushKeyboardArrows()
clickNavbarBtns()

// section 1
moveTitleSection1BackGround()

// section 3
scrollingWorks()
document.addEventListener('transitionend', () => setSection3ProjectStyles())

// styles nav. buttons
document.addEventListener('scroll', () => setStylesNavbar())
