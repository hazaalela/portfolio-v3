// Navbar scroll effect

const navbar = document.querySelector(".navbar");
const progressBar = document.getElementById("progress-bar");
const menu = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menu.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

window.addEventListener("scroll", () => {

    navbar.classList.toggle("scrolled", window.scrollY > 50);

    const pageHeight =
        document.documentElement.scrollHeight -
        window.innerHeight;

    const progress =
        (window.scrollY / pageHeight) * 100;

    progressBar.style.width = progress + "%";

});
const words = [
    "Front-End Developer.",
    "Computer Programming Student.",
    "JavaScript Learner.",
    "Problem Solver."
];

let wordIndex = 0;
let letterIndex = 0;
let currentWord = "";
let isDeleting = false;

const typing = document.getElementById("typing");

function type() {

    currentWord = words[wordIndex];

    if (isDeleting) {
        typing.textContent = currentWord.substring(0, letterIndex--);
    } else {
        typing.textContent = currentWord.substring(0, letterIndex++);
    }

    let speed = isDeleting ? 60 : 120;

    if (!isDeleting && letterIndex === currentWord.length + 1) {
        speed = 1800;
        isDeleting = true;
    }

    if (isDeleting && letterIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
    }

    setTimeout(type, speed);
}

type();
window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    setTimeout(() => {
        loader.classList.add("hidden");
    }, 700);

});
const glow = document.querySelector(".cursor-glow");

document.addEventListener("mousemove", (e) => {

    glow.style.left = e.clientX + "px";
    glow.style.top = e.clientY + "px";

});
document.querySelectorAll(".nav-links a")
.forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

    });

});