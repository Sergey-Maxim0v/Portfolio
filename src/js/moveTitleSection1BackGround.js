import state from "./state";

const moveTitleSection1BackGround = () => {
    const title = state.titleSection1
    const width = state.width
    let userMouseX = 0
    document.addEventListener('mousemove', (event)=>{
        userMouseX = event.clientX
        title.style.backgroundPositionX = `${100 - (userMouseX / width * 100)}%`
    })
}

export default moveTitleSection1BackGround