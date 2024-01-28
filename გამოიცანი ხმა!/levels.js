const levelIcons = document.querySelector(".level-icons");
const level1 = document.getElementById("level1");
const bar = document.querySelector(".bar");


bar.addEventListener("click", () => {
    levelIcons.classList.toggle("hide");

    gsap.from('.level', {
        duration: 1.5,
        x: "-100%",
        ease: "expo",
      
    })
});

level1.addEventListener("click", () => {
    location.href = "index.html";
})