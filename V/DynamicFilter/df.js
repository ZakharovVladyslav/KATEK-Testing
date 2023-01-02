const initialForm = document.getElementById('initial-form')
const addFilterButton = document.getElementById('add-filter')
const mainForm = document.getElementById('main-form')
const filterToAdd = document.getElementById('filter-for-add')
const addRemoveField = document.getElementById('add-remove-field')

const presentFilters = []

initialForm.onsubmit = e => {
    e.preventDefault()
}

document.querySelector('#add-filter').addEventListener('click', e => {
    if (filterToAdd.value !== '' && !presentFilters.includes(filterToAdd.value)) {
        const html = `
        <div>
            <label id='label-${filterToAdd.value}'><button type="button">&times</button>${filterToAdd.value}</label>
            <input id="${filterToAdd.value}"/>
        </div>
        `
        mainForm.insertAdjacentHTML('beforeend', html)

        presentFilters.push(filterToAdd.value)
        filterToAdd.value = ''
    } else if (presentFilters.includes(filterToAdd.value)) {
        filterToAdd.value = 'Filter exists'

        let promise = new Promise(res => {
            setTimeout(() => res(filterToAdd.value = ''), 1200)
        })
    }
})

mainForm.addEventListener('click', e => {
    e.preventDefault()

    const target = e.target
    const targetId = e.target.closest('label').id.slice(6)
    
    if (target.tagName != 'BUTTON') 
        return
    
    target.closest('form').removeChild(target.closest('div'))
    
    presentFilters.splice(presentFilters.indexOf(targetId), 1)
})

mainForm.addEventListener('submit', e => {
    e.preventDefault()
})