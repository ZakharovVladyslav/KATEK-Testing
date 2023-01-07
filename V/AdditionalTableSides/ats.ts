const buttonNext : HTMLElement | null = document.querySelector('#button-next')
const buttonPrevious : HTMLElement | null = document.querySelector('#button-previous')
const table : HTMLElement | null = document.querySelector('#main-table')

let index = -1

if (index === -1 && buttonPrevious) 
    buttonPrevious.style.color = 'rgb(120, 120, 120)'

const arr = [
    [
        { 'h1': 'd1', 'h2': 'd2', 'h3': 'd3' },
        { 'h1': 'd11', 'h2': 'd22', 'h3': 'd33' },
        { 'h1': 'd4', 'h2': 'd5', 'h3': 'd6' },
        { 'h1': 'd44', 'h2': 'd55', 'h3': 'd65' },
    ],
    [
        { 'h4': 'd7', 'h5': 'd8', 'h6': 'd9' },
        { 'h4': 'd77', 'h5': 'd88', 'h6': 'd99' },
        { 'h4': 'd10', 'h5': 'd11', 'h6': 'd12' },
        { 'h4': 'd100', 'h5': 'd111', 'h6': 'd122' },
    ],
    [
        { 'h7': 'd13', 'h8': 'd14', 'h9': 'd15' },
        { 'h7': 'd133', 'h8': 'd144', 'h9': 'd155' },
        { 'h7': 'd16', 'h8': 'd17', 'h9': 'd18' },
        { 'h7': 'd166', 'h8': 'd177', 'h9': 'd188' }
    ]
]

const getValues = (object : object) : string[] => {
    const results : string[] = []

    return results
}

// Adding headers to the table

if (buttonNext) {
    buttonNext.addEventListener('click', () => {
        const buttonNext : HTMLElement | null = document.querySelector('#button-next')
        const buttonPrevious : HTMLElement | null = document.querySelector('#button-previous')

        if (index < arr.length - 1)
            index++

        const thead = document.createElement('thead')
        const tbody = document.createElement('tbody')

        // ----------------------------------------------------------------------------------------
        // HEADERS / KEYS --------------------------------------------------------------------------------
        // ----------------------------------------------------------------------------------------
        let keys : string[] = []

        for (let i = 0; i < arr[index].length; i++) {
            arr[index].forEach((object : object) => {
                for (let key of Object.keys(object))
                    keys.push(key)
            })
        }

        keys = Array.from(new Set<string>(keys).values())

        if (table)
            table.innerHTML = ''

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
        
        // ----------------------------------------------------------------------------------------

        if (table) {
            table.appendChild(thead)
            table.appendChild(tbody)
        }
    })
}

if (buttonPrevious) {
    buttonPrevious.addEventListener('click', () => {
        const buttonNext : HTMLElement | null = document.querySelector('#button-next')
        const buttonPrevious : HTMLElement | null = document.querySelector('#button-previous')

        if (index !== 0 && index > -1 && index < arr.length)
            index--
        
        if (index < arr.length - 1 && buttonNext)
            buttonNext.style.color = 'rgb(255, 255, 255)'

        if (index === 0 && buttonPrevious)
            buttonPrevious.style.color = 'rgb(120, 120, 120)'

        const thead = document.createElement('thead')
        const tbody = document.createElement('tbody')

        let keys : string[] = []

        for (let i = 0; i < arr[index].length; i++) {
            arr[index].forEach((object : object) => {
                for (let key of Object.keys(object))
                    keys.push(key)
            })
        }

        keys = Array.from(new Set<string>(keys).values())

        if (table)
            table.innerHTML = ''

        const tableHeadersRow = document.createElement('tr')
        for (let i = 0; i < keys.length; i++) {
            const tableHeader = document.createElement('th')
            tableHeader.innerHTML = keys[i]
            tableHeadersRow.appendChild(tableHeader)
        }

        thead.appendChild(tableHeadersRow)

        if (table)
            table.appendChild(thead)
    })
}

export {}