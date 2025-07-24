document.addEventListener('DOMContentLoaded', function() {
    // Get the query parameter from the URL
    const urlParams = new URLSearchParams(window.location.search);
    const query = urlParams.get('title');

    if (query) {
        document.title = `Search Results for "${query}" - YumYum Recipes`;
        fetchRecipes(query);
    }
});


let hamburgerIcon = document.querySelector(".hamburger")
let menubar = document.querySelector(".menubar")
let Nav_LeftBtns = document.querySelector(".Nav_LeftBtns")

hamburgerIcon.addEventListener("click", () => {
    menubar.classList.toggle("showMenu")
    Nav_LeftBtns.classList.toggle("showMenu")
    
})



let recipe_container=document.querySelector(".recipe_container")


let fetchRecipes=async(query)=>{

    let response= await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);
    let data=await response.json();
    console.log(data)


let item=document.createElement("div")
item.classList.add("recipe_box")

item.innerHTML=`
    <aside class="recipe_img">
    <img src="${data.meals[0].strMealThumb}" alt="">
</aside>
<div class="recipe_info">
    <h1 class="recipe_name">${data.meals[0].strMeal}</h1>
    <p class="recipe_category">${data.meals[0].strCategory}</p>
    <div class="star_rating">
    <span class="fas fa-star checked"></span>
    <span class="fas fa-star checked"></span>
    <span class="fas fa-star checked"></span>
    <span class="fas fa-star"></span>
    <span class="fas fa-star"></span>
    </div>
    <div class="recipe_subInfo">
        <div class="prep_time time">
            <p>Prep time</p>
            <p>5 min</p>
            </div>
            <hr>
        <div class="cook_time time">
            <p>Cook time</p>
            <p>10 min</p>
            </div>
            <hr>
        <div class="total_time time">
            <p>Total time</p>
            <p>15 min</p>
        </div>
    </div>
</div>

<div class="ingredients">
<h2>Ingredients</h2>
</div>
<div class="recipe">
<h2>Recipe</h2>
<p>${data.meals[0].strInstructions}</p>
</div>
`
const ingredients_container=item.querySelector(".ingredients")

for (let i = 1; i <= 20; i++) {
    const ingredient = data.meals[0][`strIngredient${i}`];
    
    // Check if the ingredient is not empty
    if (ingredient) {
        // Create a paragraph element for each ingredient
        const ingredientItem = document.createElement('p');
        ingredientItem.textContent = ingredient;
        
        // Append the ingredient to the ingredients container
        ingredients_container.appendChild(ingredientItem);
    }    
}
recipe_container.appendChild(item);
}