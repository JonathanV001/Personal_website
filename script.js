
document.addEventListener("DOMContentLoaded", function() {

var hamburgerButton = document.getElementById("hamburgerMenu");
var clicked = false;
let opacity = 0;

hamburgerButton.addEventListener("click", dropMenu);

function resetDropMenu(){
    document.getElementById("portraitSideBar").style.display = "none"
        document.getElementById("portraitSideBar").style.opacity = "0"
        /*COOL FADE EFFECT!*/
        opacity = 0;
        clicked = false;
}

function dropMenu(){
    if(clicked == false){
        clicked = true;
        document.getElementById("portraitSideBar").style.display = "flex"
        /*COOL FADE EFFECT!*/
        let fadeIn = setInterval(() => {
            if (opacity >= 1) {
                clearInterval(fadeIn);
             }
            document.getElementById("portraitSideBar").style.opacity = opacity;
            opacity += 0.02;
         }, 10);
        console.log(clicked);
    }else{
        resetDropMenu();
    }
}

/*screen.orientation.addEventListener("change", function(e){
    console.log("triggered");
    document.getElementById("portraitSideBar").style.display = "none"
});*/

/*function for closing sidebar on resize to landscape*/
window.addEventListener("resize",(event) => {
    var H = parseInt(window.innerHeight);
    var W = parseInt(window.innerWidth);
    if(H > W){
        resetDropMenu();
    }
});

/*sidebar button functions*/
var homeContent = document.getElementById("homeContent");
var projectsContent = document.getElementById("projectsContent");
var experienceContent = document.getElementById("experienceContent");
var resumeContent = document.getElementById("resumeContent");

/*one button for portrait and the other for landscape*/
document.getElementById("homeIconPor").addEventListener("click", homeButtonClick);
document.getElementById("homeIconLand").addEventListener("click", homeButtonClick);
function homeButtonClick(){
    resetDropMenu();
    console.log("clciked");
    homeContent.style.display = "flex";
    projectsContent.style.display = "none";
    experienceContent.style.display = "none";
    resumeContent.style.display = "none";
}

document.getElementById("projectButtonPor").addEventListener("click", projectButtonClick);
document.getElementById("projectButtonLand").addEventListener("click", projectButtonClick);
function projectButtonClick(){
    resetDropMenu();
    console.log("clciked");
    homeContent.style.display = "none";
    projectsContent.style.display = "block";
    experienceContent.style.display = "none";
    resumeContent.style.display = "none";
}

document.getElementById("experienceButtonPor").addEventListener("click", experienceButtonClick);
document.getElementById("experienceButtonLand").addEventListener("click", experienceButtonClick);
function experienceButtonClick(){
    resetDropMenu();
    homeContent.style.display = "none";
    projectsContent.style.display = "none";
    experienceContent.style.display = "flex";
    resumeContent.style.display = "none";
}

document.getElementById("resumeButtonPor").addEventListener("click", resumeButtonClick);
document.getElementById("resumeButtonLand").addEventListener("click", resumeButtonClick);
function resumeButtonClick(){
    resetDropMenu();
    homeContent.style.display = "none";
    projectsContent.style.display = "none";
    experienceContent.style.display = "none";
    resumeContent.style.display = "flex";
}

// Slide in animation for text
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if(entry.isIntersecting){
                entry.target.classList.add("show");
        }else{
            entry.target.classList.remove("show");
        }
        
    });
});

const hiddenEleemnts = document.querySelectorAll(".hidden");
hiddenEleemnts.forEach((el) => observer.observe(el))

});