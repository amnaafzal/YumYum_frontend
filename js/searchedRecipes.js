document.addEventListener('DOMContentLoaded', function() {
    // Get the query parameter from the URL
    const urlParams = new URLSearchParams(window.location.search);
    const query = urlParams.get('query');

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



let container=document.querySelector(".container")




let fetchRecipes=async(query)=>{
    let response= await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`)

    data= await response.json()
    console.log(data)
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


                        container.appendChild(item)

        let recipe_heading=item.querySelector(".item_info h3")
      

        recipe_heading.addEventListener("click",()=>{
            let title=recipe_heading.textContent;
            openRecipe(title);
        })
       
        let likeBtn = item.querySelector(".like-btn");

        likeItem(likeBtn,meal)

    });
    

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


let openRecipe=(title)=>{
    if (title) {
        window.location.href = `../html/openRecipe.html?title=${encodeURIComponent(title)}`;
    }

}


// hamburgerIcon.addEventListener("click",()=>{
//     menubar.classList.toggle("dropdown-menu")
// })

