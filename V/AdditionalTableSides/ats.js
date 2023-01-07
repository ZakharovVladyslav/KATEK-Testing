const buttonNext = document.querySelector('#button-next')
const buttonPrevious = document.querySelector('#button-previous')
const table = document.querySelector('#main-table')

const thead = document.createElement('thead')
const tbody = document.createElement('tbody')

let index = 0

if (index === 0)
    buttonPrevious.style.color = 'rgb(120, 120, 120)'

const arr = [
    [
        { 'h1': 'd1', 'h2': 'd2', 'h3': 'd3' },
        { 'h1': 'd11', 'h2': 'd22', 'h3': 'd33' },
        { 'h1': 'd111', 'h2': 'd222', 'h3': 'd333' },
        { 'h1': 'd1111', 'h2': 'd2222', 'h3': 'd3333' },
        { 'h1': 'd1', 'h2': 'd2', 'h3': 'd3' },
        { 'h1': 'd11', 'h2': 'd22', 'h3': 'd33' },
        { 'h1': 'd111', 'h2': 'd222', 'h3': 'd333' },
        { 'h1': 'd1111', 'h2': 'd2222', 'h3': 'd3333' },
        { 'h1': 'd1', 'h2': 'd2', 'h3': 'd3' },
        { 'h1': 'd11', 'h2': 'd22', 'h3': 'd33' },
        { 'h1': 'd111', 'h2': 'd222', 'h3': 'd333' },
        { 'h1': 'd1111', 'h2': 'd2222', 'h3': 'd3333' },
        { 'h1': 'd1', 'h2': 'd2', 'h3': 'd3' },
        { 'h1': 'd11', 'h2': 'd22', 'h3': 'd33' },
        { 'h1': 'd111', 'h2': 'd222', 'h3': 'd333' },
        { 'h1': 'd1111', 'h2': 'd2222', 'h3': 'd3333' },
    ],
    [
        { 'h4': 'd4', 'h5': 'd5', 'h6': 'd6' },
        { 'h4': 'd44', 'h5': 'd55', 'h6': 'd66' },
        { 'h4': 'd444', 'h5': 'd555', 'h6': 'd666' },
        { 'h4': 'd4444', 'h5': 'd5555', 'h6': 'd6666' },
        { 'h4': 'd4', 'h5': 'd5', 'h6': 'd6' },
        { 'h4': 'd44', 'h5': 'd55', 'h6': 'd66' },
        { 'h4': 'd444', 'h5': 'd555', 'h6': 'd666' },
        { 'h4': 'd4444', 'h5': 'd5555', 'h6': 'd6666' },
        { 'h4': 'd4', 'h5': 'd5', 'h6': 'd6' },
        { 'h4': 'd44', 'h5': 'd55', 'h6': 'd66' },
        { 'h4': 'd444', 'h5': 'd555', 'h6': 'd666' },
        { 'h4': 'd4444', 'h5': 'd5555', 'h6': 'd6666' },
        { 'h4': 'd4', 'h5': 'd5', 'h6': 'd6' },
        { 'h4': 'd44', 'h5': 'd55', 'h6': 'd66' },
        { 'h4': 'd444', 'h5': 'd555', 'h6': 'd666' },
        { 'h4': 'd4444', 'h5': 'd5555', 'h6': 'd6666' },
    ],
    [
        { 'h7': 'd7', 'h8': 'd8', 'h9': 'd9' },
        { 'h7': 'd77', 'h8': 'd88', 'h9': 'd99' },
        { 'h7': 'd777', 'h8': 'd888', 'h9': 'd999' },
        { 'h7': 'd7777', 'h8': 'd8888', 'h9': 'd9999' },
        { 'h7': 'd7', 'h8': 'd8', 'h9': 'd9' },
        { 'h7': 'd77', 'h8': 'd88', 'h9': 'd99' },
        { 'h7': 'd777', 'h8': 'd888', 'h9': 'd999' },
        { 'h7': 'd7777', 'h8': 'd8888', 'h9': 'd9999' },
        { 'h7': 'd7', 'h8': 'd8', 'h9': 'd9' },
        { 'h7': 'd77', 'h8': 'd88', 'h9': 'd99' },
        { 'h7': 'd777', 'h8': 'd888', 'h9': 'd999' },
        { 'h7': 'd7777', 'h8': 'd8888', 'h9': 'd9999' },
        { 'h7': 'd7', 'h8': 'd8', 'h9': 'd9' },
        { 'h7': 'd77', 'h8': 'd88', 'h9': 'd99' },
        { 'h7': 'd777', 'h8': 'd888', 'h9': 'd999' },
        { 'h7': 'd7777', 'h8': 'd8888', 'h9': 'd9999' }
    ]
]

const getValues = (object) => {
    const results = []

    for (let values of Object.values(object))
        results.push(values)

    return results
}

let keys = []

for (let i = 0; i < arr[index].length; i++) {
    arr[index].forEach(object => {
        for (let key of Object.keys(object))
            keys.push(key)
    })
}

keys = Array.from(new Set(keys))

const tableHeadersRow = document.createElement('tr')
for (let i = 0; i < keys.length; i++) {
    const tableHeaderCell = document.createElement('th')
    tableHeaderCell.innerHTML = keys[i]
    tableHeadersRow.appendChild(tableHeaderCell)
}

thead.appendChild(tableHeadersRow)

// ----------------------------------------------------------------------------------------

// ----------------------------------------------------------------------------------------
// DATA -----------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------

const values = arr[index].map(object => {
    return getValues(object)
})

for (let i = 0; i < arr[index].length; i++) {
    const tableDataRow = document.createElement('tr')

    for (let j = 0; j < values[i].length; j++) {
        const tableDataCell = document.createElement('td')

        console.log(values)
        tableDataCell.innerHTML = values[i][j]

        tableDataRow.appendChild(tableDataCell)
    }

    tbody.appendChild(tableDataRow)
}

// ----------------------------------------------------------------------------------------

table.appendChild(thead)
table.appendChild(tbody)

// Adding headers to the table

buttonNext.addEventListener('click', () => {
    const buttonNext = document.querySelector('#button-next')
    const buttonPrevious = document.querySelector('#button-previous')

    table.innerHTML = ''

    if (index < arr.length - 1)
        index++

    if (index > 0)
        buttonPrevious.style.color = 'rgb(255, 255, 255)'

    if (index === arr.length - 1)
        buttonNext.style.color = 'rgba(120, 120, 120)'

    const thead = document.createElement('thead')
    const tbody = document.createElement('tbody')

    // ----------------------------------------------------------------------------------------
    // HEADERS / KEYS --------------------------------------------------------------------------------
    // ----------------------------------------------------------------------------------------
    let keys = []

    for (let i = 0; i < arr[index].length; i++) {
        arr[index].forEach(object => {
            for (let key of Object.keys(object))
                keys.push(key)
        })
    }

    keys = Array.from(new Set(keys))

    const tableHeadersRow = document.createElement('tr')
    for (let i = 0; i < keys.length; i++) {
        const tableHeaderCell = document.createElement('th')
        tableHeaderCell.innerHTML = keys[i]
        tableHeadersRow.appendChild(tableHeaderCell)
    }

    thead.appendChild(tableHeadersRow)

    // ----------------------------------------------------------------------------------------

    // ----------------------------------------------------------------------------------------
    // DATA -----------------------------------------------------------------------------------
    // ----------------------------------------------------------------------------------------

    const values = arr[index].map(object => {
        return getValues(object)
    })

    for (let i = 0; i < arr[index].length; i++) {
        const tableDataRow = document.createElement('tr')

        for (let j = 0; j < values[i].length; j++) {
            const tableDataCell = document.createElement('td')

            console.log(values)
            tableDataCell.innerHTML = values[i][j]

            tableDataRow.appendChild(tableDataCell)
        }

        tbody.appendChild(tableDataRow)
    }

    // ----------------------------------------------------------------------------------------

    table.appendChild(thead)
    table.appendChild(tbody)
})


buttonPrevious.addEventListener('click', () => {
    const buttonNext = document.querySelector('#button-next')
    const buttonPrevious = document.querySelector('#button-previous')

    if (index !== 0 && index > -1 && index < arr.length)
        index--

    if (index < arr.length - 1 && buttonNext)
        buttonNext.style.color = 'rgb(255, 255, 255)'

    if (index === 0 && buttonPrevious)
        buttonPrevious.style.color = 'rgb(120, 120, 120)'

    const thead = document.createElement('thead')
    const tbody = document.createElement('tbody')

    // ----------------------------------------------------------------------------------------
    // HEADERS / KEYS --------------------------------------------------------------------------------
    // ----------------------------------------------------------------------------------------

    table.innerHTML = ''

    let keys = []

    for (let i = 0; i < arr[index].length; i++) {
        arr[index].forEach(object => {
            for (let key of Object.keys(object))
                keys.push(key)
        })
    }

    keys = Array.from(new Set(keys))


    const tableHeadersRow = document.createElement('tr')
    for (let i = 0; i < keys.length; i++) {
        const tableHeader = document.createElement('th')
        tableHeader.innerHTML = keys[i]
        tableHeadersRow.appendChild(tableHeader)
    }

    thead.appendChild(tableHeadersRow)

    // ----------------------------------------------------------------------------------------

    // ----------------------------------------------------------------------------------------
    // DATA -----------------------------------------------------------------------------------
    // ----------------------------------------------------------------------------------------

    const values = arr[index].map(object => {
        return getValues(object)
    })

    for (let i = 0; i < arr[index].length; i++) {
        const tableDataRow = document.createElement('tr')

        for (let j = 0; j < values[i].length; j++) {
            const tableDataCell = document.createElement('td')

            console.log(values)
            tableDataCell.innerHTML = values[i][j]

            tableDataRow.appendChild(tableDataCell)
        }

        tbody.appendChild(tableDataRow)
    }

    // ----------------------------------------------------------------------------------------

    table.appendChild(thead)
    table.appendChild(tbody)
})