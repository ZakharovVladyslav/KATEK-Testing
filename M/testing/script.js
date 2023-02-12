'use strict'

const dataArr = [1, 2, 3, 4, 5, 6]

//Filter section should be completed later

/*
const inpField1 = document.getElementById('field1').value 
const inpField2 = document.getElementById('field2').value
const inpField3 = document.getElementById('field3').value
const inpField4 = document.getElementById('field4').value
const inpField5 = document.getElementById('field5').value
*/

const button = document.querySelector('#submit-btn')
const tblt = document.querySelector('#tblt')

console.log(dataArr)

button.onclick = () => {
    const tbody = document.createElement('tbody')

    for (let i = 0; i < dataArr.length; i++) {
        const row = document.createElement('tr')
        for (let j = 0; j < 3; j++) {
            const cell = document.createElement('td')
            cell.style.minHeight = '40px'
            cell.style.minWidth = '40px'
            cell.style.backgroundColor = 'rgb(120, 120, 120)'
            cell.innerHTML = dataArr[i]
            row.appendChild(cell)
        }
        tbody.appendChild(row)
    }   
    tblt.appendChild(tbody)
}