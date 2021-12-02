var i = 0;
var txt = "And, I'm a Software Developer!";
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
// document.getElementById("defaultOpen").click();

function toggleTheme(event) {
  var button = document.getElementsByClassName('toggleText')
  for(var i=0; i<button.length; i++) {
    if (button[i].innerHTML == 'DARK THEME') {
        button[i].innerHTML = "LIGHT THEME"
      }else {
        button[i].innerHTML = "DARK THEME"
      }
  }

}
function OpenNav() {
  // document.getElementById('toggleButton').style.display = "none"
  document.getElementById('overlay').style.visibility = "visible"
}

function CloseNav() {
  // document.getElementById('toggleButton').style.display = "block"
  document.getElementById('overlay').style.visibility = "hidden"
}
