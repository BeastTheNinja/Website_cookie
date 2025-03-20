// NAVIGATION BAR SCRIPT
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