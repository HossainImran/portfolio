const toggleBtn = document.querySelector('.toggle__btn')
const toggleBtn2 = document.querySelector('.toggle__btn2')

toggleBtn.addEventListener('click', () => {
    document.querySelector('.dropdown__nav').style.display = 'flex'
    document.querySelector('.toggle__btn2').style.display = 'block'
})

toggleBtn2.addEventListener('click', () => {
    document.querySelector('.dropdown__nav').style.display = 'none'
    document.querySelector('.toggle__btn2').style.display = 'none'
})

const dropDownLinks1 = document.querySelector('.js-links1')
const dropDownLinks2 = document.querySelector('.js-links2')
const dropDownLinks3 = document.querySelector('.js-links3')
const dropDownLinks4 = document.querySelector('.js-links4')
const dropDownLinks5 = document.querySelector('.js-links5')
    function dropdownOff() {
        document.querySelector('.dropdown__nav').style.display = 'none'
        document.querySelector('.toggle__btn2').style.display = 'none'
    }

dropDownLinks1.addEventListener('click', () => {
    dropdownOff() 
})
dropDownLinks2.addEventListener('click', () => {
    dropdownOff() 
})

dropDownLinks3.addEventListener('click', () => {
    dropdownOff() 
})

dropDownLinks4.addEventListener('click', () => {
    dropdownOff() 
})

dropDownLinks5.addEventListener('click', () => {
    dropdownOff() 
})

