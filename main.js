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

function openCity(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();