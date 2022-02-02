import removeStyleNavButtons from "./removeStyleNavButtons";
import animatingPages from "./animatingPages";
import state from "./state"

const {
    nodeSections,
    arrNodeNavBarButtons,
    height,
    setActivePageIndex,
    setActivePage,
    navBtnUp,
    navBtnDown
} = state

let transitionEnd = true

arrNodeNavBarButtons[0].classList.add('navBarSecActive')

animatingPages(state.activePageIndex)
clickNavBar()
pushKeyArrows()
scrollMouseWheel()
pushNavBtns()

// scroll Mouse Wheel

function scrollMouseWheel() {
    document.addEventListener('wheel', (event) => {
        if (!transitionEnd) {
            return;
        }
        if (event.deltaY < 0) {
            setActivePage.call(state, 'up')
        }
        if (event.deltaY > 0) {
            setActivePage.call(state, 'down')
        }
        if (state.activePageIndex !== 0 && state.activePageIndex !== 3) {
            transitionEnd = false
        }
    });
}

nodeSections.addEventListener('transitionend', () => {
    transitionEnd = true
});

// push Key Arrows

function pushKeyArrows() {
    document.addEventListener('keyup', (event) => {
        if (event.key === 'ArrowUp') {
            setActivePage.call(state, 'up')
        }
        if (event.key === 'ArrowDown') {
            setActivePage.call(state, 'down')
        }
    })
}

// push Nav Buttons

function pushNavBtns() {
    navBtnUp.addEventListener('click', (event) => setActivePage.call(state, 'up'))
    navBtnDown.addEventListener('click', (event) => setActivePage.call(state, 'down'))
}


// clickNavBar

function clickNavBar() {
    for (let i = 0; i < arrNodeNavBarButtons.length; i++) {
        arrNodeNavBarButtons[i].addEventListener('click', (event) => {
            if (event) {
                setActivePageIndex.call(state, i)
                nodeSections.style.transform = `translateY(-${i * height}px)`
                removeStyleNavButtons.call(state, 'navBarSecActive')
                arrNodeNavBarButtons[i].classList.add('navBarSecActive')
                animatingPages(i)
            }
        })
    }
}
