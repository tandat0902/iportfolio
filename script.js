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

const srBottom = ScrollReveal({
    origin: "bottom",
    distance: "80px",
    duration: 2000,
});

srBottom.reveal(".project-box", {delay: 100});

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

// -------- SLIDES
let projects = document.querySelectorAll('.project-slides .projects');
let next = document.getElementById('next');
let prev = document.getElementById('prev');



let active = 1;
function loadShow(){
    let stt = 0;
    projects[active].style.transform = `none`;
    projects[active].style.zIndex = 1;
    projects[active].style.filter = `none`;
    projects[active].style.opacity = 1;
    for(var i = active + 1; i < projects.length; i++){
        stt++;
        projects[i].style.zIndex = -stt;
        projects[i].style.filter = `blur(5px)`;
        projects[i].style.opacity = 0;
    }

    stt = 0;
    for(var i = active - 1; i >= 0; i--){
        stt++;
        projects[i].style.zIndex = -stt;
        projects[i].style.filter = `blur(5px)`;
        projects[i].style.opacity = 0;
    }
}

loadShow();

next.onclick = function(){
    active = active + 1 < projects.length ? active + 1 : active;
    loadShow();
}

prev.onclick = function(){
    active = active - 1 >= 0 ? active - 1 : active;
    loadShow();
}