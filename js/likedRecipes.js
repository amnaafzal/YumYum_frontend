let likedRecipesContainer = document.querySelector(".block")
console.log(likedRecipesContainer)

let hamburgerIcon = document.querySelector(".hamburger")
let menubar = document.querySelector(".menubar")
let Nav_LeftBtns = document.querySelector(".Nav_LeftBtns")

hamburgerIcon.addEventListener("click", () => {
    menubar.classList.toggle("showMenu")
    Nav_LeftBtns.classList.toggle("showMenu")
    
})





// function definition to show the likd recipe items  
const token = localStorage.getItem("token")  // getting token from the local storage 

async function displayLikedRecipes() {



    let data = await fetch('https://052e43b4-fc74-4321-8fd0-4f11f6c3a002-00-2bguuo1h8qs7j.pike.replit.dev/likerecipe/get', {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        },

    })

    let res = await data.json()
    let likedRecipes = res.likedRecipes


    // show all liked recipies on the page  

    likedRecipes.forEach(meal => {
        let item = document.createElement("div");

        item.classList.add("item");

        item.innerHTML = `
            <img src="${meal.strMealThumb}" alt="" class="item_img">
            <div class="item_layout">
                <button class="like-btn"><i class="fas fa-heart"></i></button>
            </div>
            <div class="item_info">
                <h3>${meal.strMeal}</h3>
                <div class="star_rating">
                    <span class="fas fa-star"></span>
                    <span class="fas fa-star"></span>
                    <span class="fas fa-star"></span>
                    <span class="fas fa-star"></span>
                    <span class="fas fa-star"></span>
                </div>
            </div>`;

        // Append the item to your liked recipes container (e.g., likedRecipesContainer)
        likedRecipesContainer.appendChild(item);

        // calling the function on clicking the title of item

        let recipe_heading = item.querySelector(".item_info h3")


        recipe_heading.addEventListener("click", () => {
            let title = recipe_heading.textContent;
            openRecipe(title); // function call
        })

        // removing the liked item on clicking  like icon again

        let likeBtn = item.querySelector(".like-btn");

        likeBtn.addEventListener("click", async () => {
            let heart = likeBtn.querySelector("i")
            heart.classList.toggle("liked");

            const data = await fetch("https://052e43b4-fc74-4321-8fd0-4f11f6c3a002-00-2bguuo1h8qs7j.pike.replit.dev/likerecipe/delete", {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                },
                body: JSON.stringify(meal)
            })

            const res = await data.json()
            alert(res.message)

            window.location.reload()

        })
    });
}



displayLikedRecipes(); // function calling to display liked items  


// redirecting to the next page on clicking the recipe name 

let openRecipe = (title) => {
    if (title) {
        window.location.href = `../html/openRecipe.html?title=${encodeURIComponent(title)}`;
    }

}

