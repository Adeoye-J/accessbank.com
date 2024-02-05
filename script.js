// NavBar Click for all views

// Mobile View

const mainNav = document.getElementById("main-nav");
const openMenu = document.getElementById("hamburger");
const closeMenu = document.getElementById("close-nav")

openMenu.addEventListener("click", () => {
    mainNav.classList.add("show_menu")
})
closeMenu.addEventListener("click", () => {
    mainNav.classList.remove("show_menu")
})

const mainList = document.querySelectorAll(".main-list");
const subList = document.querySelectorAll(".sub-list");

for(i = 0; i < mainList.length; i++) {
    mainList[i].addEventListener("click", () => {
        mainList.classList.add("show-sub-list");
    })
}

// navLink.forEach(n => n.addEventListener("click", () => {
//     const navMenu = document.getElementById("nav_menu");
//     navMenu.classList.remove("show_menu");
// }))

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

const iconWrapper = document.getElementById("icon-wrapper");
const prevIcon = document.getElementById("prev-icon");
const nextIcon = document.getElementById("next-icon");

prevIcon.addEventListener("click", () => {
    iconWrapper.scrollBy({left: -iconWrapper.clientWidth, behavior: "smooth"});
});
nextIcon.addEventListener("click", () => {
    iconWrapper.scrollBy({left: iconWrapper.clientWidth, behavior: "smooth"});
});

const testimonialWrapper = document.getElementById("testimonials");
const prevTestimonial = document.getElementById("prev-testimonial");
const nextTestimonial = document.getElementById("next-testimonial");

prevTestimonial.addEventListener("click", () => {
    testimonialWrapper.scrollBy({left: -testimonialWrapper.clientWidth, behavior: "smooth"});
});
nextTestimonial.addEventListener("click", () => {
    testimonialWrapper.scrollBy({left: testimonialWrapper.clientWidth, behavior: "smooth"});
});

const statisticsWrapper = document.getElementById("statistics");
const prevStat = document.getElementById("prev-stat");
const nextStat = document.getElementById("next-stat");

prevStat.addEventListener("click", () => {
    statisticsWrapper.scrollBy({left: -statisticsWrapper.clientWidth, behavior: "smooth"});
});
nextStat.addEventListener("click", () => {
    statisticsWrapper.scrollBy({left: statisticsWrapper.clientWidth, behavior: "smooth"});
});




