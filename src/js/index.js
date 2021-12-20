const nodeSections = document.querySelector('.sections');
const nodeMainLayout = document.querySelector('.mainLayout');
const arrNodeNavBarButtons = document.querySelectorAll('.navBarSec');

const height = nodeSections.clientHeight;

let activePictureIndex = 0;
let transitionEnd = true;

arrNodeNavBarButtons[0].classList.add('navBarSecActive');

clickNavBar();
pushKeyArrows();
scrollMouseWheel();

// scroll Mouse Wheel

function scrollMouseWheel() {
  document.addEventListener('wheel', (event) => {
    if (!transitionEnd) {
      return;
    }
    if (event.deltaY < 0) {
      setActivePage('up');
    } else if (event.deltaY > 0) {
      setActivePage('down');
    }
    if(activePictureIndex != 0 && activePictureIndex != 4) {
      transitionEnd = false;
    }
  });
}

nodeSections.addEventListener('transitionend', () => {
  transitionEnd = true;
});

// push Key Arrows

function pushKeyArrows() {
  document.addEventListener('keyup', keySetActivePage);
  document.addEventListener('keydown', (event) => {
    // todo
    // if (event.key === 'ArrowUp') {
    //   console.log();
    // } else if (event.key === 'ArrowDown') {
    //   console.log();
    // }
  });
}

function keySetActivePage(event) {
  if (event.key === 'ArrowUp') {
    setActivePage('up');
  } else if (event.key === 'ArrowDown') {
    setActivePage('down');
  }
}

// clickNavBar

function clickNavBar() {
  for (let i = 0; i < arrNodeNavBarButtons.length; i++) {
    arrNodeNavBarButtons[i].addEventListener('click', (event) => {
      if (event) {
        selectPageDisplay(i);
        removeStyleNavButtons('navBarSecActive');
        arrNodeNavBarButtons[i].classList.add('navBarSecActive');
      }
    });
  }
}

// helpers

function selectPageDisplay(n) {
  activePictureIndex = n;
  nodeSections.style.transform = `translateY(-${
    activePictureIndex * height
  }px)`;
}

function removeStyleNavButtons(style) {
  for (let el of arrNodeNavBarButtons) {
    el.classList.remove(style);
  }
}

function setActivePage(value) {
  if (value === 'up') {
    if (activePictureIndex - 1 >= 0) {
      activePictureIndex -= 1;
    }
    removeStyleNavButtons('navBarSecActive');
    arrNodeNavBarButtons[activePictureIndex].classList.add('navBarSecActive');
    nodeSections.style.transform = `translateY(-${
      activePictureIndex * height
    }px)`;
  } else if (value === 'down') {
    if (activePictureIndex + 1 <= 4) {
      activePictureIndex += 1;
    }
    removeStyleNavButtons('navBarSecActive');
    arrNodeNavBarButtons[activePictureIndex].classList.add('navBarSecActive');
    nodeSections.style.transform = `translateY(-${
      activePictureIndex * height
    }px)`;
  }
}
