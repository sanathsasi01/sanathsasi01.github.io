var i = 0;
var txt = "And, I'm a Software Developer !";
var speed = 50;

window.onload = function() {
    typeWriter()
}

function typeWriter(){
    if (i < txt.length) {
        document.getElementById("typingText").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }else {
        document.getElementById("arrow").style.visibility = "visible";
        document.getElementById("resume").style.visibility = "visible";
    }
}