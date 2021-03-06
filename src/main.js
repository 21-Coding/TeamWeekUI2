
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import './src-noconflict/ace.js';
import './src-noconflict/theme-monokai.js';
import './src-noconflict/mode-javascript.js';
import './src-noconflict/worker-javascript.js';
import { Game } from './game.js'

var editor = ace.edit("editor");
editor.setTheme("ace/theme/monokai");
editor.session.setMode("ace/mode/javascript");

function switchQuestions(game){
  //hide previous questions
  //show new
  //should switch questions if answer is correct or time runs out on this.starterScore;
  for(i = 1; i <= 10; i++){
    $(`#${i}`).show();
    $(`#${i}`).hide();

  }
}

function returnScore(){
  //display current score
}

function countDownTimer(game){
  setInterval(() => {
    $('h1#countDown').text(`Timer: ${game.starterScore}`);
  }, 10);
}

$(document).ready(function(){
  let collectionArray = [];
  let game = new Game(collectionArray);
  //setTimeout(switchQuestion, 10) --hoping this will make the function run 10 time for each question. but that would just make the loop do it's 10 loops, 10 times.
  $(document).keyup(function (event) {
    collectionArray.push(event.keyCode);
    console.log(collectionArray);
  });
});

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}


// atom buttons that link to pop up banner
$("#moveCurrent").click(function(event){
  event.preventDefault();
  $(".noShow").hide();
  $("#pointer").fadeIn();
  $("#shortcut1").fadeIn();

})

$("#selectNext").click(function(event){
  event.preventDefault();
  $(".noShow").hide();
  $("#pointer").fadeIn();
  $("#shortcut2").fadeIn();
})

$("#selectAll").click(function(event){
  event.preventDefault();
  $(".noShow").hide();
  $("#pointer").fadeIn();
  $("#shortcut3").fadeIn();
})

$("#shakeSelect").click(function(event){
  event.preventDefault();
  $(".noShow").hide();
  $("#pointer").fadeIn();
  $("#shortcut4").fadeIn();
})
// end atom buttons to pop up banner






// chrome buttons to pop up banner
$("#clearConsole").click(function(event){
  event.preventDefault();
  $(".noShow").hide();
  $("#pointer").fadeIn();
  $("#shortcut5").fadeIn();

})

$("#openInspector").click(function(event){
  event.preventDefault();
  $(".noShow").hide();
  $("#pointer").fadeIn();
  $("#shortcut6").fadeIn();

})

$("#newTab").click(function(event){
  event.preventDefault();
  $(".noShow").hide();
  $("#pointer").fadeIn();
  $("#shortcut7").fadeIn();
})

$("#newWindow").click(function(event){
  event.preventDefault();
  $(".noShow").hide();
  $("#pointer").fadeIn();
  $("#shortcut8").fadeIn();
})

// end chrome buttons to pop up banner





// general buttons to pop up banner
$("#copy").click(function(event){
  event.preventDefault();
  $(".noShow").hide();
  $("#pointer").fadeIn();
  $("#shortcut9").fadeIn();

})

$("#paste").click(function(event){
  event.preventDefault();
  $(".noShow").hide();
  $("#pointer").fadeIn();
  $("#shortcut10").fadeIn();

})

$("#pasteWithout").click(function(event){
  event.preventDefault();
  $(".noShow").hide();
  $("#pointer").fadeIn();
  $("#shortcut11").fadeIn();
})

$("#select").click(function(event){
  event.preventDefault();
  $(".noShow").hide();
  $("#pointer").fadeIn();
  $("#shortcut12").fadeIn();
})

// end general buttons to pop up banner
