const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector(".nav-list");

menuToggle.addEventListener("click", ()=>{
    navMenu.classList.toggle("active");
});


// Ændret, så den bruger `navMenu` i stedet for at oprette en ny variabel
window.addEventListener("scroll", (e)=>{
    // console.log(e);
    navMenu.style.backgroundColor = window.scrollY > 50 ? "#000" : "#777777";
});

const fadeElements = document.querySelectorAll(".fade-in");
const fadeInOnScroll = () => {
    fadeElements.forEach(el => {
        if (el.getBoundingClientRect().top < window.innerHeight * 0.9) {
            el.classList.add("show");
        }
    });
};

window.addEventListener("scroll", fadeInOnScroll);
fadeInOnScroll();