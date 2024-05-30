// Authentication
const loginForm = document.querySelector("#login")
const registerForm = document.querySelector("#register")
const addressSetup = document.querySelector("#address-setup")
const forgotPassword = document.querySelector("#forgot-password")

// Button and links
const toForgot = document.querySelector(".toForgot")
const toRegister = document.querySelector('.toRegister')
const toLogin = document.querySelector(".toLogin")

const registerBtn = document.querySelector("#registerBtn")
const addressBtn = document.querySelector("#addressBtn")

// Sections
const sectionAuthentication = document.querySelector(".authentication")
const sectionPages = document.querySelector("#pages")

// Event listeners
toForgot.addEventListener('click', () => {
    loginForm.classList.remove('active')
    forgotPassword.classList.add('active')
})

toRegister.addEventListener('click', () => {
    loginForm.classList.remove("active")
    registerForm.classList.add('active')
})

toLogin.addEventListener("click", () => {
    registerForm.classList.remove('active')
    loginForm.classList.add('active')
})

registerBtn.addEventListener("click", () => {
    registerForm.classList.remove("active")
    addressSetup.classList.add('active')
})

// Pages
const navItems = document.querySelectorAll('#nav ul li')

navItems.forEach(item => {
    item.addEventListener("click",() => {
        navItems.forEach(e => {
            e.classList.remove('active')
        })
        item.classList.add('active')
    })
});