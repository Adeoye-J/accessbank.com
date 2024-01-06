// NavBar Click for all views

// Mobile View

// const nav = getElementById("nav");



// Image Wrapper Nav

// const dropDown = document.getElementById("img-wrap-arrow");

// dropDown.addEventListener("click", () => {
//     document.getElementById("img-wrapper");
// })


// Section-2 Mobile View Horizontal Scroll

const imageWrapper = document.getElementById("img-wrapper");
const leftNav = document.getElementById("prev");
const rightNav = document.getElementById("next");


leftNav.addEventListener("click", () => {
    imageWrapper.scrollBy({ left: -imageWrapper.clientWidth, behavior: "smooth"});
});
rightNav.addEventListener("click", () => {
    imageWrapper.scrollBy({ left: imageWrapper.clientWidth, behavior: "smooth"});
});

