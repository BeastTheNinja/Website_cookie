// MAIN CODING
// ---------------------------------------------------------------------------------------------------------------------------------------
// Gallery
const thumbs = document.querySelectorAll("#thumps img");
const bigImage = document.querySelector("#big");

thumbs.forEach((thumb) => {
    thumb.addEventListener("click", function (e) {
        let tempSrc = bigImage.src;
        bigImage.src = e.target.src;
        e.target.src = tempSrc;
    });
});
// ---------------------------------------------------------------------------------------------------------------------------------------
// NAVIGATION BAR 
// const menuToggle = document.querySelector(".menu-toggle");
// const navMenu = document.querySelector(".nav-list");

// menuToggle.addEventListener("click", ()=>{
//     navMenu.classList.toggle("active");
// });


// // Ændret, så den bruger `navMenu` i stedet for at oprette en ny variabel
// window.addEventListener("scroll", (e)=>{
//     // console.log(e);
//     navMenu.style.backgroundColor = window.scrollY > 50 ? "#000" : "#777777";
// });

// const fadeElements = document.querySelectorAll(".fade-in");
// const fadeInOnScroll = () => {
//     fadeElements.forEach(el => {
//         if (el.getBoundingClientRect().top < window.innerHeight * 0.9) {
//             el.classList.add("show");
//         }
//     });
// };

// window.addEventListener("scroll", fadeInOnScroll);
// fadeInOnScroll();
//---------------------------------------------------------------------------------------------------------------------------------------
// COOKIES ------------------------------------------------------------------------------------------------------------------------------
    const cookiePopup = document.getElementById("cookiePopup");
    const overlay = document.getElementById("overlay");
    const acceptButton = document.getElementById("acceptCookies");

    // Tjek om cookies allerede er accepteret
    const cookiePreference = localStorage.getItem("cookiePreference");

    if (!cookiePreference) {
        // Ingen præference valgt, vis popup og lås skærm
        overlay.style.display = "block";
        cookiePopup.style.display = "block";
    } else {
        console.log("Cookie preference:", cookiePreference);
    }

    // Stop klik på popup i at lukke den
    cookiePopup.addEventListener("click", function (event) {
        event.stopPropagation();
    });

    // Acceptér cookies og gem valget i localStorage
    acceptButton.addEventListener("click", function () {
        let selectedCookie = document.querySelector("input[name='cookieType']:checked").value;
        localStorage.setItem("cookiePreference", selectedCookie);

        // Fjern popup og overlay
        overlay.style.display = "none";
        cookiePopup.style.display = "none";
    });

    // Hvis ingen valg er truffet, omdirigér
    setTimeout(() => {
        if (!localStorage.getItem("cookiePreference")) {
            window.location.href = "https://www.google.com"; // Ændr til din ønskede URL
        }
    }, 5000); // 5 sekunder
//----------------------------------------------------------------------------------------------------------------------------------------