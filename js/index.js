let mainContainer=document.querySelector(".mainContainer")

let slideBoxes=document.querySelector(".slideBoxes");
let preBtn=document.querySelector(".preBtn");
let nextBtn=document.querySelector(".nextBtn");
let slide_box=document.querySelector(".slide_box")
let menubar=document.querySelector(".menubar")
let hamburgerIcon=document.querySelector(".hamburger")
let btns = document.querySelector(".btns")


hamburgerIcon.addEventListener("click", () => {
    menubar.classList.toggle("showMenu")
    btns.classList.toggle("showMenu")
    
})


hamburgerIcon.addEventListener("click",()=>{
    console.log("thi sis hamburge icon")
    menubar.classList.toggle("hamburger_dropdown")
})

let boxWidth=slide_box.offsetWidth;
// console.log(boxWidth)

preBtn.addEventListener("click", previous=()=>{
    
    slideBoxes.scrollLeft-=boxWidth+5;
})
nextBtn.addEventListener("click", next=()=>{
    slideBoxes.scrollLeft+=boxWidth+5;
})


document.querySelectorAll('.srchBtn').forEach(button => {
    button.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default button behavior

        // Get the corresponding search input
        const searchInput = button.previousElementSibling;
        const query = searchInput.value.trim();

        if (query) {
            // Redirect to the search results page with the query as a URL parameter
            window.location.href = `./html/searchedRecipes.html?query=${encodeURIComponent(query)}`;
        }
    });
});






