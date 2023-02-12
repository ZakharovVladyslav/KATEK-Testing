const buttonNext = document.querySelector('#button-next')
const buttonPrevious = document.querySelector('#button-previous')
const staticTable = document.querySelector('#static-table')
const dynamicTable = document.querySelector('#dynamic-table')
const selectionTable = document.querySelector('#selection-table')
const selectionTableSubmitButton = document.querySelector("#selection-table-submit")
const fileInputSubmitButton = document.querySelector('#submit-button')

buttonNext.style.display = 'none'
buttonPrevious.style.display = 'none'
selectionTableSubmitButton.style.display = 'none'

/* FUNCTION SECTION */

const getSplicedHeaders = (dynamicTableKeys) => {
      const pairKeys = []

      while (dynamicTableKeys.length > 0)
            pairKeys.push(dynamicTableKeys.splice(0, 4))

      return pairKeys
}

const getValues = (object) => {
      const results = []

      for (let values of Object.values(object))
            results.push(values)

      return results
}

const renderDynamicTable = (tableIndex, dynamicTableKeys, headers) => {
      dynamicTable.innerHTML = ''

      const dynamicTableData = []

      arr.forEach(obj => {
            dynamicTableData.push(dynamicTableKeys.map(key => {
                  return obj[key]
            }))
      })

      const dynamicTableHead = document.createElement('thead')
      const dynamicTableBody = document.createElement('tbody')

      const dynamicTableHeaderRow = document.createElement('tr')

      headers[tableIndex].forEach(header => {
            const dynamicTableHeader = document.createElement('th')
            dynamicTableHeader.innerHTML = header
            dynamicTableHeaderRow.appendChild(dynamicTableHeader)
      })

      dynamicTableHead.appendChild(dynamicTableHeaderRow)
      dynamicTable.appendChild(dynamicTableHead)

      arr.forEach(obj => {
            const dynamicTableRow = document.createElement('tr')

            headers[tableIndex].forEach(header => {
                  const dynamicTableDataCell = document.createElement('td')

                  if (obj[header] !== undefined) 
                        dynamicTableDataCell.innerHTML = obj[header]
                        
                  dynamicTableDataCell.style.height = '20px'

                  dynamicTableRow.appendChild(dynamicTableDataCell)
            })

            dynamicTableBody.appendChild(dynamicTableRow)
      })

      dynamicTable.appendChild(dynamicTableBody)
}
/*--------------------------------------------*/

const arr = [
      { 'h1': 'd1', 'h2': 'd2', 'h3': 'd3', 'h4': 'd4', 'h5': 'd5', 'h6': 'd6', 'h7': 'd7', 'h8': 'd8', 'h9': 'd9', 'h10': 'd10', 'h11': 'd11', 'h12': 'd12', 'h13': 'd13' },
      { 'h1': 'd11', 'h2': 'd22', 'h3': 'd33', 'h4': 'd44', 'h5': 'd55', 'h6': 'd66', 'h7': 'd77', 'h8': 'd88', 'h9': 'd99', 'h10': 'd100' },
      { 'h1': 'd111', 'h2': 'd222', 'h3': 'd333', 'h4': 'd444', 'h5': 'd555', 'h6': 'd666', 'h7': 'd777', 'h8': 'd888', 'h9': 'd999', 'h10': 'd1000' },
      { 'h1': 'd1111', 'h2': 'd2222', 'h3': 'd3333', 'h4': 'd4444', 'h5': 'd5555', 'h6': 'd6666', 'h7': 'd7777', 'h8': 'd8888', 'h9': 'd9999', 'h10': 'd10000' },
      { 'h1': 'd1', 'h2': 'd2', 'h3': 'd3', 'h4': 'd4', 'h5': 'd5', 'h6': 'd6', 'h7': 'd7', 'h8': 'd8', 'h9': 'd9', 'h10': 'd10', 'h11': 'd11', 'h12': 'd12', 'h13': 'd13' },
      { 'h1': 'd11', 'h2': 'd22', 'h3': 'd33', 'h4': 'd44', 'h5': 'd55', 'h6': 'd66', 'h7': 'd77', 'h8': 'd888', 'h9': 'd9', 'h10': 'd100' },
      { 'h1': 'd111', 'h2': 'd222', 'h3': 'd333', 'h4': 'd444', 'h5': 'd555', 'h6': 'd666', 'h7': 'd777', 'h8': 'd888', 'h9': 'd9', 'h10': 'd1000' },
      { 'h1': 'd1111', 'h2': 'd2222', 'h3': 'd3333', 'h4': 'd4444', 'h5': 'd5555', 'h6': 'd6666', 'h7': 'd7777', 'h8': 'd8888', 'h9': 'd9', 'h10': 'd10000' },
      { 'h1': 'd1', 'h2': 'd2', 'h3': 'd3', 'h4': 'd4', 'h5': 'd5', 'h6': 'd6', 'h7': 'd7', 'h8': 'd8', 'h9': 'd9', 'h10': 'd10', 'h11': 'd11', 'h12': 'd12', 'h13': 'd13' },
      { 'h1': 'd11', 'h2': 'd22', 'h3': 'd33', 'h4': 'd44', 'h5': 'd55', 'h6': 'd66', 'h7': 'd77', 'h8': 'd88', 'h9': 'd9', 'h10': 'd100' },
      { 'h1': 'd111', 'h2': 'd222', 'h3': 'd333', 'h4': 'd444', 'h5': 'd555', 'h6': 'd666', 'h7': 'd777', 'h8': 'd888', 'h9': 'd9', 'h10': 'd1000' },
      { 'h1': 'd1111', 'h2': 'd2222', 'h3': 'd3333', 'h4': 'd4444', 'h5': 'd5555', 'h6': 'd6666', 'h7': 'd7777', 'h8': 'd8888', 'h9': 'd9', 'h10': 'd10000' },
      { 'h1': 'd1', 'h2': 'd2', 'h3': 'd3', 'h4': 'd4', 'h5': 'd5', 'h6': 'd6', 'h7': 'd7', 'h8': 'd8', 'h9': 'd9', 'h10': 'd10', 'h11': 'd11', 'h12': 'd12', 'h13': 'd13' },
      { 'h1': 'd11', 'h2': 'd22', 'h3': 'd33', 'h4': 'd44', 'h5': 'd55', 'h6': 'd66', 'h7': 'd77', 'h8': 'd88', 'h9': 'd9', 'h10': 'd100' },
      { 'h1': 'd111', 'h2': 'd222', 'h3': 'd333', 'h4': 'd444', 'h5': 'd555', 'h6': 'd666', 'h7': 'd777', 'h8': 'd888', 'h9': 'd9', 'h10': 'd1000' },
      { 'h1': 'd1111', 'h2': 'd2222', 'h3': 'd3333', 'h4': 'd4444', 'h5': 'd5555', 'h6': 'd6666', 'h7': 'd7777', 'h8': 'd8888', 'h9': 'd9', 'h10': 'd10000' },
]

fileInputSubmitButton.onclick = () => {
      selectionTableSubmitButton.style.display = 'block'

      let dynamicTableKeys = []
      let staticTableKeys = []
      const selectionTableBody = document.createElement('tbody')

      const allKeys = Array.from(
            new Set(
                  arr.map(
                        obj => Object.keys(obj)
                              .map(key => key)
                  ).flat(Infinity)
            )
      )

      if (!selectionTable.innerHTML) {
            for (let i = 0; i < allKeys.length; i++) {
                  const tableRow = document.createElement('tr')

                  const tableCell = document.createElement('td')
                  let pos = allKeys[i]

                  tableCell.innerHTML = allKeys[i]
                  tableCell.classList.add('sqr')

                  tableCell.addEventListener('click', () => {
                        staticTableKeys.indexOf(pos) === -1 ? staticTableKeys.push(pos) : staticTableKeys = staticTableKeys.filter(elem => elem !== pos)
                        tableCell.classList.toggle('selected')
                  })

                  tableRow.appendChild(tableCell)

                  selectionTableBody.appendChild(tableRow)
            }

            selectionTable.appendChild(selectionTableBody)
      }

      selectionTableSubmitButton.onclick = () => {

            let tableIndex = 0

            buttonNext.style.display = 'block'
            buttonPrevious.style.display = 'block'

            staticTable.innerHTML = ''
            dynamicTable.innerHTML = ''

            dynamicTableKeys = allKeys.filter(item => !staticTableKeys.includes(item))

            /*---------------------------------------------------------------------*/
            /* STATIC TABLE -------------------------------------------------------*/
            /*---------------------------------------------------------------------*/

            const staticTableHead = document.createElement('thead')
            const staticTableBody = document.createElement('tbody')

            const staticTableHeaderRow = document.createElement('tr')

            staticTableKeys.forEach(header => {
                  const staticTableHeader = document.createElement('th')
                  staticTableHeader.innerHTML = header
                  staticTableHeaderRow.appendChild(staticTableHeader)
            })

            staticTableHead.appendChild(staticTableHeaderRow)
            staticTable.appendChild(staticTableHead)

            for (let i = 0; i < arr.length; i++) {
                  const staticTableDataRow = document.createElement('tr')

                  staticTableKeys.forEach(key => {
                        if (arr[i][key] !== undefined && arr[i][key] !== '') {
                              const staticTableDataCell = document.createElement('td')
                              staticTableDataCell.innerHTML = arr[i][key]
                              staticTableDataRow.appendChild(staticTableDataCell)
                        }
                  })

                  staticTableBody.appendChild(staticTableDataRow)
            }

            staticTable.appendChild(staticTableBody)

            /*---------------------------------------------------------------------*/
            /* DYNAMIC TABLE -------------------------------------------------------*/
            /*---------------------------------------------------------------------*/


            const copy = [...dynamicTableKeys]
            const headers = getSplicedHeaders(copy)

            renderDynamicTable(tableIndex, dynamicTableKeys, headers)
            buttonPrevious.style.color = 'rgb(120, 120, 120)'

            if (tableIndex === headers.length - 1)
                  buttonNext.style.color = 'rgb(120, 120, 120)'
            else
                  buttonNext.style.color = 'rgb(255, 255, 255)'

            buttonPrevious.onclick = () => {
                  const copy = [...dynamicTableKeys]
                  const headers = getSplicedHeaders(copy)

                  if (tableIndex === 0 && tableIndex > -1)
                        tableIndex = 0
                  else {
                        tableIndex--

                        if (tableIndex === 0)
                              buttonPrevious.style.color = 'rgb(140, 140, 140)'

                        buttonNext.style.color = 'rgb(255, 255, 255)'
                  }

                  renderDynamicTable(tableIndex, dynamicTableKeys, headers)
            }

            buttonNext.onclick = () => {
                  const copy = [...dynamicTableKeys]
                  const headers = getSplicedHeaders(copy)

                  if (tableIndex === headers.length - 1)
                        tableIndex === headers.length - 1
                  else {
                        tableIndex++

                        if (tableIndex === headers.length - 1)
                              buttonNext.style.color = 'rgb(140, 140, 140)'

                        buttonPrevious.style.color = 'rgb(255, 255, 255)'
                  }


                  renderDynamicTable(tableIndex, dynamicTableKeys, headers)
            }

      }
}