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