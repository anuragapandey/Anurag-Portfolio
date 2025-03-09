const aboutMe = document.querySelector('#about-me')
const openPopUp = document.querySelector('#about-me-btn')
const closePopUp = document.querySelector('#close-icon')

openPopUp.addEventListener('click',() => {
    aboutMe.classList.remove('hidden')
})

closePopUp.addEventListener('click', () => {
    aboutMe.classList.add('hidden')
})