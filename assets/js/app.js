// Buttons
const loginBtn = document.querySelector("#loginBtn")
const registerBtn = document.querySelector("#registerBtn")
const resetBtn = document.querySelector("#resetBtn")

// Links
const toForgot = document.querySelector(".toForgot")
const toRegister = document.querySelector(".toRegister")
const toLogin = document.querySelector(".toLogin")

// Pages
const loginPage = document.querySelector(".login")
const registerPage = document.querySelector(".register")
const addressPage = document.querySelector(".address")
const forgotPage = document.querySelector(".forgot")

toRegister.addEventListener("click", () => {
    loginPage.classList.remove("active")
    registerPage.classList.add("active")
})

toForgot.addEventListener("click", () => {
    loginPage.classList.remove("active")
    forgotPage.classList.add("active")
})

toLogin.addEventListener("click",() => {
    registerPage.classList.remove("active")
    loginPage.classList.add("active")
})

registerBtn.addEventListener("click", () => {
    registerPage.classList.remove("active")
    addressPage.classList.add("active")
})