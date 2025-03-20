// MAIN CODING

// Gallery
const thumbs = document.querySelectorAll("#thumbs img");
const bigImage = document.querySelector("#big");

thumbs.forEach((thumb) => {
    thumb.addEventListener("click", function (e) {
        let tempSrc = bigImage.src;
        bigImage.src = e.target.src;
        e.target.src = tempSrc;
    });
});
//