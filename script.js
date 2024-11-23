// -------- BARS
function myMenuFunction() {
    var menuBtn = document.getElementById("myNavMenu");

    if(menuBtn.className === "nav-menu"){
        menuBtn.className += " responsive";
    }
    else{
        menuBtn.className = "nav-menu";
    }
} 

// -------- MODE
const body = document.querySelector("body"),
    toggleSwitch = document.getElementById("toggle-switch");

toggleSwitch.addEventListener("click", () => {
    body.classList.toggle("dark");
})

// -------- TYPING EFFECT
var typingEffect = new Typed(".typedText", {
    strings: ["Pham Tran Tan Dat"],

    loop: true,
    typeSpeed: 100,
    backSpeed: 80,
    backDelay: 2000,
})

// -------- SCROLL
const sr = ScrollReveal({
    origin: "top",
    distance: "80px",
    duration: 2000,
});

sr.reveal(".featured-name", {delay: 100});
sr.reveal(".text-info", {delay: 200});
sr.reveal(".social_icons", {delay: 100});

sr.reveal(".skill-box", {interval: 200});

sr.reveal(".top-header", {});

const srLeft = ScrollReveal({
    origin: "left",
    distance: "80px",
    duration: 2000,
});

srLeft.reveal(".skill-text", {delay: 200})
srLeft.reveal(".education-box", {delay: 200})


// -------- ACTION LINK
const sections = document.querySelectorAll(".section[id]");

function scrollActive(){
    const scrollY = window.scrollY;

    sections.forEach((current) => {
        const sectionHeight = current.offsetHeight,

        sectionTop = current.offsetTop - 150,
        sectionId = current.getAttribute("id");

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector(".nav-menu a[href*=" + sectionId + "]").classList.add("active-link");
        }
        else{
            document.querySelector(".nav-menu a[href*=" + sectionId + "]").classList.remove("active-link");
        }
    });
}

window.addEventListener("scroll", scrollActive);