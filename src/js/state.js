import removeStyleNavButtons from "./removeStyleNavButtons";
import animatingPages from "./animatingPages";

const state = {
    body: document.querySelector('body'),
    titleSection1: document.querySelector('.section1Title'),
    arrNodeNavBarButtons: document.querySelectorAll('.navBarSec'),
    navBtnUp: document.querySelector('.navBtnUp'),
    navBtnDown: document.querySelector('.navBtnDown'),
    nodeSections: document.querySelector('.sections'),
    height: document.querySelector('.sections').clientHeight,
    width: document.querySelector('body').clientWidth,

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
