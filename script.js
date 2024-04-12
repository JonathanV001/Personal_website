
window.addEventListener("DOMContentLoaded", (event) => {

var hamburgerButton = document.getElementById("hamburgerMenu");
var clicked = false;
let opacity = 0;

hamburgerButton.addEventListener("click", dropMenu);

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
        clicked = false;
        document.getElementById("portraitSideBar").style.display = "none"
        document.getElementById("portraitSideBar").style.opacity = "0"
        /*COOL FADE EFFECT!*/
        opacity = 0;
    }
}

/*screen.orientation.addEventListener("change", function(e){
    console.log("triggered");
    document.getElementById("portraitSideBar").style.display = "none"
});*/

window.addEventListener("resize",(event) => {
    var H = parseInt(window.innerHeight);
    var W = parseInt(window.innerWidth);
    if(H > W){
        document.getElementById("portraitSideBar").style.display = "none"
        document.getElementById("portraitSideBar").style.opacity = "0"
        /*COOL FADE EFFECT!*/
        opacity = 0;
        clicked = false;
    }
});

});