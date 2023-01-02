const openSideBarCheckbox = document.getElementById('open-side-bar')
const openSideBarLabel = document.getElementById('open-side-bar-label')
const sidePanel = document.getElementById('side-section')

openSideBarCheckbox.onchange = (e) => {
    if (openSideBarCheckbox.checked) {
        sidePanel.style.width = "250px"
        sidePanel.style.borderRight = "1px solid #00ffff"
        openSideBarLabel.style.marginLeft = "250px"
        openSideBarLabel.style.transform = 'rotate(90deg)'
        openSideBarLabel.style.transition = '0.5s ease-in-out'
    }
    else {
        sidePanel.style.width = "0px"
        setTimeout(() => sidePanel.style.borderRight = "0px", 500)
        openSideBarLabel.style.transform = 'rotate(-45deg)'
        openSideBarLabel.style.marginLeft = "0px"
    }
}