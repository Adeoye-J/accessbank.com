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