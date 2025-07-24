const LikedRecipesBtn = document.querySelector('.LikedRecipesBtn')
const loginBtn = document.querySelector(".logIn")

const token = localStorage.getItem('token')



LikedRecipesBtn.addEventListener("click", () => {


    // Check token expiration before using it
    function isTokenExpired(token) {
        if (!token) return true;

        try {
            const payload = JSON.parse(atob(token.split('.')[1]));
            
            const expiryTime = payload.exp * 1000; // convert to ms
            return Date.now() > expiryTime;
        } catch (e) {
            return true; // if anything goes wrong, treat as expired
        }
    }


    if (!token || isTokenExpired(token)) {
        localStorage.removeItem('token'); // Clean it up
        
        window.location.href = '/frontend/html/login.html'; // Redirect to login
    }
    else {

        window.location.href = '/frontend/html/likedRecipies.html'
    }

})

if (token) {
    loginBtn.innerText = "Logout"
  
}
else {
    loginBtn.innerText = "Login"
    
}


loginBtn.addEventListener("click", () => {
    if (loginBtn.innerText == "Logout") {
        localStorage.clear()
        loginBtn.innerText = "Login"
    }

    else {
        window.location.href = '/frontend/html/login.html'
    }
})




