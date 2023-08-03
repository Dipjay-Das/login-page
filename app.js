console.log("Hello")
const signupBtn = document.querySelector(".sign-up");
const signinBtn = document.querySelector(".sign-in");
const container = document.querySelector(".container");


signupBtn.addEventListener('click', () => {
    container.classList.add("login-part");

    signinBtn.addEventListener('click', () => {
        container.classList.remove("login-part");
    })
})