const aboutMe = document.querySelector('#about-me')
const openPopUp = document.querySelector('#about-me-btn')
const closePopUp = document.querySelector('#close-icon')

openPopUp.addEventListener('click',() => {
    aboutMe.classList.remove('hidden')
    document.body.classList.add('overflow-hidden')
})

closePopUp.addEventListener('click', () => {
    aboutMe.classList.add('hidden')
    document.body.classList.remove('overflow-hidden')
})

aboutMe.addEventListener('click', (event) => {
    if (event.target === aboutMe) {
        aboutMe.classList.add('hidden')
        document.body.classList.remove('overflow-hidden')
    }
})
