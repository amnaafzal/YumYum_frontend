let hamburgerIcon = document.querySelector(".hamburger")
let menubar = document.querySelector(".menubar")
let Nav_LeftBtns = document.querySelector(".Nav_LeftBtns")


hamburgerIcon.addEventListener("click", () => {
    menubar.classList.toggle("showMenu")
    Nav_LeftBtns.classList.toggle("showMenu")
    
})





let banner_slider = document.querySelector(".banner_slider")
let cuisine = banner_slider.querySelectorAll(".cuisine")

cuisine.forEach(area => {
    area.addEventListener("click", () => {
        let query = area.querySelector("p").innerText
        console.log(query)

        // Redirect to the search results page with the query as a URL parameter
        window.location.href = `../html/area.html?query=${encodeURIComponent(query)}`;
    })


})


// breakfast block 

let meal_container = document.querySelector(".meal_container");
let breakfast_container = meal_container.querySelector(".breakfast");
let breakfast_recipies = breakfast_container.querySelector(".breakfast_block")
let chicken_recipies = document.querySelector(".Chicken_block")
let dessert_recipies = document.querySelector(".Desserts_block")
let vegetarian_recipies = document.querySelector(".Vegetarian_block")
let seafood_recipies = document.querySelector(".SeaFood_block")
let miscelaneous_recipies = document.querySelector(".Miscellaneous_block")



let breakfast = async () => {
    let response = await fetch("https://www.themealdb.com/api/json/v1/1/filter.php?c=breakfast")
    let data = await response.json()

    data.meals.forEach(meal => {
        let item = document.createElement("div")

        item.classList.add("item")

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
                        </div>`


        breakfast_recipies.appendChild(item)


        let recipe_heading = item.querySelector(".item_info h3")


        recipe_heading.addEventListener("click", () => {
            let title = recipe_heading.textContent;
            openRecipe(title);
        })

        let likeBtn = item.querySelector(".like-btn");

        likeItem(likeBtn,meal)




    });

}

breakfast();

let chicken = async () => {
    let response = await fetch("https://www.themealdb.com/api/json/v1/1/filter.php?c=chicken")
    let data = await response.json()

    data.meals.forEach(meal => {
        let item = document.createElement("div")

        item.classList.add("item")

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
                        </div>`


        chicken_recipies.appendChild(item)

         let recipe_heading = item.querySelector(".item_info h3")


        recipe_heading.addEventListener("click", () => {
            let title = recipe_heading.textContent;
            openRecipe(title);
        })



        let likeBtn = item.querySelector(".like-btn");

        likeItem(likeBtn,meal)

    });

}

chicken();
let vegetarian = async () => {
    let response = await fetch("https://www.themealdb.com/api/json/v1/1/filter.php?c=vegetarian")
    let data = await response.json()

    data.meals.forEach(meal => {
        let item = document.createElement("div")

        item.classList.add("item")

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
                        </div>`


        vegetarian_recipies.appendChild(item)

        let recipe_heading = item.querySelector(".item_info h3")


        recipe_heading.addEventListener("click", () => {
            let title = recipe_heading.textContent;
            openRecipe(title);
        })

        let likeBtn = item.querySelector(".like-btn");

        likeItem(likeBtn,meal)

    });

}

vegetarian();
let seafood = async () => {
    let response = await fetch("https://www.themealdb.com/api/json/v1/1/filter.php?c=seafood")
    let data = await response.json()

    data.meals.forEach(meal => {
        let item = document.createElement("div")

        item.classList.add("item")

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
                        </div>`


        seafood_recipies.appendChild(item)

        let recipe_heading = item.querySelector(".item_info h3")


        recipe_heading.addEventListener("click", () => {
            let title = recipe_heading.textContent;
            openRecipe(title);
        })

        let likeBtn = item.querySelector(".like-btn");

        likeItem(likeBtn,meal)

    });

}

seafood();
let dessert = async () => {
    let response = await fetch("https://www.themealdb.com/api/json/v1/1/filter.php?c=dessert")
    let data = await response.json()
    data.meals.forEach(meal => {
        let item = document.createElement("div")

        item.classList.add("item")

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
                        </div>`


        dessert_recipies.appendChild(item)
        let recipe_heading = item.querySelector(".item_info h3")


        recipe_heading.addEventListener("click", () => {
            let title = recipe_heading.textContent;
            openRecipe(title);
        })

        let likeBtn = item.querySelector(".like-btn");

        likeItem(likeBtn,meal)

    });

}

dessert();
let miscelaneous = async () => {
    let response = await fetch("https://www.themealdb.com/api/json/v1/1/filter.php?c=miscellaneous")
    let data = await response.json()

    data.meals.forEach(meal => {
        let item = document.createElement("div")

        item.classList.add("item")

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
                        </div>`


        miscelaneous_recipies.appendChild(item)
        let recipe_heading = item.querySelector(".item_info h3")
        recipe_heading.addEventListener("click", () => {
            let title = recipe_heading.textContent;
            openRecipe(title);
        })


        let likeBtn = item.querySelector(".like-btn");

        likeItem(likeBtn,meal)

    });

}

miscelaneous();


let openRecipe = (title) => {
    if (title) {
        window.location.href = `../html/openRecipe.html?title=${encodeURIComponent(title)}`;
    }

}

let likeItem = (likeBtn,meal) => {

    let heart = likeBtn.querySelector("i")
    const token = localStorage.getItem("token")
    
    
    likeBtn.addEventListener("click",async () => {
        if(!heart.classList.contains('liked')){

            heart.classList.add("liked");
            
    
            const res = await fetch("http://localhost:5000/likerecipe/post",{
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`
                    },
                    body: JSON.stringify(meal)
                }
                );
        
                const data = await res.json()
                alert(data.message)
        }

        else{
            heart.classList.remove('liked')

            const res = await fetch("http://localhost:5000/likerecipe/delete",{
                    method: "DELETE",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`
                    },
                    body: JSON.stringify(meal)
                }
                );

                 const data = await res.json()
                alert(data.message)
        }
    })

}



