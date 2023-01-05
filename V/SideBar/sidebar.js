const openSideBarCheckbox = document.getElementById('open-side-bar')
const openSideBarLabel = document.getElementById('open-side-bar-label')
const sidePanel = document.getElementById('side-section')
const table = document.getElementById('table')
const tableElements = ['ProdCode', 'Customer', 'ProdName', 'ArticleNum', 'MatNum', 'OpSystem', 'DBAccName', 'DBAccVers', 'HostName', 'WkStNmae', 'AdpNum', 'ProcName', 'ProcNum', 'WkOrder', 'AVO', 'TPVersion', 'tLogIn', 'tLogOut', 'tLastAcc', 'tLatenz', 'tLatenzSumme', 'tCycle', 'tProc', 'FPY', 'CountPass', 'CountFail', 'CountPass_Retest']
const tbody = document.createElement('tbody')
const para = document.querySelector('#para')
const showResButton = document.querySelector('#showRes')
const filtersForm = document.querySelector('#filters-form')

openSideBarCheckbox.onchange = (e) => {
    if (openSideBarCheckbox.checked) {
        sidePanel.style.width = "750px"
        sidePanel.style.borderRight = "1px solid #00ffff"
        openSideBarLabel.style.marginLeft = "750px"
        openSideBarLabel.style.transform = 'rotate(360deg)'
        openSideBarLabel.style.transition = '0.5s ease-in-out'
    }
    else {
        sidePanel.style.width = "0px"
        setTimeout(() => sidePanel.style.borderRight = "0px", 500)
        openSideBarLabel.style.transform = 'rotate(-360deg)'
        openSideBarLabel.style.marginLeft = "0px"
    }
}

let results = []

const divideArrByNine = (arr) => {
    const resultArr = []

    for (let i = 0; i < 9; i++) {
        const innerArr = []
        for (let j = 0; j < 3; j++) {
            innerArr.push(arr[i * 3 + j])
        }
        resultArr.push(innerArr)
    }

    return resultArr
}

for (let i = 0; i < 9; i++) {
    const tr = document.createElement('tr')
    for (let j = 0; j < 3; j++) {
        const td = document.createElement('td')
        let pos = divideArrByNine(tableElements)[i][j]
        td.innerHTML = divideArrByNine(tableElements)[i][j]
        td.classList.add('sqr')

        td.addEventListener('click', () => {
            results.indexOf(pos) === -1 ? results.push(pos) : results = results.filter(it => it !== pos)
            td.classList.toggle('selected')
            console.log(results)
        });
        showResButton.onclick = () => {
    const divs = document.querySelectorAll('div')
    divs.forEach(div => div.remove())

    results.forEach(filter => {

        const html = `
            <div id='div'>
                <label id='label-${filter}'><button type="button">&times</button>${filter}</label>
                <input id="${filter}"/>
            </div>
            `
        filtersForm.insertAdjacentHTML('beforeend', html)
    })
}

filtersForm.addEventListener('submit', e => {
    e.preventDefault()
})

        tr.appendChild(td)
    }
    tbody.appendChild(tr)
}

table.appendChild(tbody)

showResButton.onclick = () => {
    const divs = document.querySelectorAll('div')
    divs.forEach(div => div.remove())

    results.forEach(filter => {

        const html = `
            <div id='div'>
                <label id='label-${filter}'><button type="button">&times</button>${filter}</label>
                <input id="${filter}"/>
            </div>
            `
        filtersForm.insertAdjacentHTML('beforeend', html)
    })
}
filtersForm.addEventListener('click', e => {

    const target = e.target

    if (target.tagName != 'BUTTON')
        return

    target.closest('form').removeChild(target.closest('div'))

    const table = e.target.closest('table')
    console.log(table)
})

filtersForm.addEventListener('submit', e => {
    e.preventDefault()
})