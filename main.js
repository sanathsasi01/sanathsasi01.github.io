
// var txt = "And, I'm a Software Developer!";
var txt = "                    I'm a Computer Science Engineer && a Software Developer!";
var speed = 10;

window.onload = function() {
    typeWriter()
}
var anchorTag = document.getElementsByTagName('a');
for (var i = 0; i < anchorTag.length; i++) {
  anchorTag[i].addEventListener('click', function(e) {
    // e.preventDefault()
  })
}
function typeWriter(){
    if (i < txt.length) {
        document.getElementById("typingText").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }else {
      setTimeout(function() {
        document.getElementById("arrow").style.visibility = "visible";
      }, 300);
      setTimeout(function() {
        document.getElementById("resume").style.visibility = "visible";
      }, 100);     
    }
}



// Get the element with id="defaultOpen" and click on it
// document.getElementById("defaultOpen").click();

function toggleTheme(event) {
  document.getElementById('overlay').style.visibility = "hidden"
  document.getElementById('arrow').classList.toggle('arrowToggle')
  var texts = document.getElementsByClassName('toggletextColor')
  for(var i=0; i<texts.length; i++) {
    texts[i].classList.toggle("TextColorSwitch")
  }
  // tech stacks
  var techStacks = document.getElementsByClassName('tech-stack')
  for(var i=0; i < techStacks.length; i++) {
    techStacks[i].classList.toggle("tech-stack-toggle")
  }

  document.getElementById('body').classList.toggle("blackBackground");
  document.getElementById('nav').classList.toggle("blackBackground");
  var button = document.getElementsByClassName('toggleText')
  for(var i=0; i<button.length; i++) {
    button[i].classList.toggle('toggleBtn')
    if (button[i].innerHTML == 'DARK THEME') {
        button[i].innerHTML = "LIGHT THEME"
      }else {
        button[i].innerHTML = "DARK THEME"
      }
  }
  var submitbtn = document.getElementsByClassName('submit')
  for(var i=0; i<submitbtn.length; i++) {
    submitbtn[i].classList.toggle('toggleBtn')
  }
  var form = document.getElementsByClassName('contact-form');
  for(var i=0; i<form.length; i++) {  
    form[i].classList.toggle('form-border');
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



// navbar shodow on scroll
var myNav = document.getElementById("nav");

// window.onscroll = function() {
//   "use strict";
//   if (document.body.scrollTop >= 50 || document.documentElement.scrollTop >= 50) {
//         myNav.classList.add("scroll");
//   } else {
//     myNav.classList.remove("scroll");
//   }
// };

