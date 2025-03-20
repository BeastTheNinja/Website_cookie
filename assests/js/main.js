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
    // Henter de nødvendige HTML-elementer ved hjælp af document.getElementById(), så vi kan manipulere dem senere.
    // cookiePopup: Selve cookie-popup'en.
    // overlay: Den mørke baggrund, der gør resten af siden ikke-interaktiv.
    // acceptButton: Knappen, som brugeren trykker på for at acceptere cookies.
    const cookiePopup = document.getElementById("cookiePopup");
    const overlay = document.getElementById("overlay");
    const acceptButton = document.getElementById("acceptCookies");

    // Tjekker, om brugeren allerede har valgt en cookie-indstilling tidligere.
    // localStorage.getItem("cookiePreference") returnerer værdien af cookiePreference, hvis den findes.
    // Hvis værdien ikke findes (brugeren har ikke accepteret cookies før), vil cookiePreference være null.
    // Tjek om cookies allerede er accepteret
    const cookiePreference = localStorage.getItem("cookiePreference");

    // Hvis brugeren ikke har valgt cookies før (cookiePreference er null), vises popup’en og overlay’et.
    // Hvis brugeren allerede har valgt en cookie-type tidligere, vises popup’en ikke.
    if (!cookiePreference) {
        // Ingen præference valgt, vis popup og lås skærm
        overlay.style.display = "block";
        cookiePopup.style.display = "block";
    } else {
        console.log("Cookie preference:", cookiePreference);
    }

    // Forhindrer, at et klik inde i cookie-popup’en også klikker på overlay’et.
    // vis vi ikke brugte event.stopPropagation(), ville popup’en lukke, selv når brugeren prøver at interagere med den.
    // Stop klik på popup i at lukke den
    cookiePopup.addEventListener("click", function (event) {
        event.stopPropagation();
    });
    // Lytter efter, når brugeren klikker på "Accepter"-knappen.
    // Når knappen trykkes, udføres koden inde i {}.
    // Acceptér cookies og gem valget i localStorage
    acceptButton.addEventListener("click", function () {
        //Finder hvilken radio-knap, brugeren har valgt (all, promotional eller needed).
        // document.querySelector("input[name='cookieType']:checked").value;
        // input[name='cookieType'] → Finder alle radio-knapper med name="cookieType".
        // :checked → Vælger den, der er markeret.
        // .value → Henter værdien (all, promotional eller needed).
        let selectedCookie = document.querySelector("input[name='cookieType']:checked").value;
        // Gemmer brugerens valg i localStorage, så vi kan huske det næste gang brugeren besøger siden.
        // localStorage.setItem("cookiePreference", selectedCookie);
        // "cookiePreference" → Navnet på det, vi gemmer.
        // selectedCookie → Værdien (all, promotional eller needed).
        localStorage.setItem("cookiePreference", selectedCookie);

        // Skjuler popup’en og overlay’et, så brugeren kan bruge hjemmesiden.
        // Fjern popup og overlay
        overlay.style.display = "none";
        cookiePopup.style.display = "none";
    });

// Starter en timer, der kører i 5 minutter (500000 millisekunder).
// Hvis brugeren ikke har valgt cookies inden for 5 sekunder, omdirigeres de til Google (eller en anden URL).
    // Hvis ingen valg er truffet, omdirigér
    setTimeout(() => {
        if (!localStorage.getItem("cookiePreference")) {
            window.location.href = "https://www.google.com"; // Ændr til din ønskede URL
        }
    }, 500000); // 5 minutter
//----------------------------------------------------------------------------------------------------------------------------------------