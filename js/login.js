
let submit_signup = document.querySelector('.submit_signup')
let submit_login = document.querySelector('.submit_login')
let hamburge = document.querySelector(".hamburger")
let menubar = document.querySelector(".menubar")
hamburge.addEventListener("click", () => {
    menubar.classList.toggle("showMenu")
})


let getLoginForm = document.querySelectorAll(".toggle-btn")
let toggle = document.querySelector(".toggle")
let login_form = document.querySelector(".login_form")


getLoginForm.forEach(btn => {
    btn.addEventListener("click", () => {

        toggle.classList.toggle("toggle_left")
        login_form.classList.toggle("login_toggle")

    })
})

let mediumScreenBtn = document.querySelectorAll(".hidden-toggle-btn")
let signUpForm = document.querySelector(".signUp_form")
let loginForm = document.querySelector(".login_form")
mediumScreenBtn.forEach(btn => {
    btn.addEventListener("click", () => {
        signUpForm.classList.toggle("hide_signup")
        loginForm.classList.toggle("show_login")

    })
})


//    register the users


submit_signup.addEventListener("click", (e) => {

    e.preventDefault()
    // taking the values of the input fields
    const username = document.querySelector('#signUp_username').value
    const email = document.querySelector('#signUp_email').value
    const password = document.querySelector('#signUp_password').value

    

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
        "username": username,
        "email": email,
        "password": password
    });

    const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow"
    };

    fetch("https://052e43b4-fc74-4321-8fd0-4f11f6c3a002-00-2bguuo1h8qs7j.pike.replit.dev/auth/signup", requestOptions)
        .then((response) => {
            if (response.status === 200) {
                toggle.classList.toggle("toggle_left")
                login_form.classList.toggle("login_toggle")
            }
            return response.json()
        })
        .then((result) => alert(result.message))
        .catch((error) => console.error(error));


})


// login the user 

submit_login.addEventListener("click", (e) => {

    const email = document.querySelector('#login_email').value
    const password = document.querySelector('#login_password').value


    e.preventDefault()
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
        "email": email,
        "password": password
    });

    const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow"
    };

    fetch("https://052e43b4-fc74-4321-8fd0-4f11f6c3a002-00-2bguuo1h8qs7j.pike.replit.dev/auth/login", requestOptions)
        .then((response) => {
            //redirect to the home page if the user is real
            if(response.status === 200){

                window.location.href = "index.html"
            }
            return response.json()
        })
        .then((result) => {
            alert(result.message)
            localStorage.setItem("token", result.token)

        })
        .catch((error) => console.error(error));




})



