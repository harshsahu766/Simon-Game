var buttonColor = ["red","blue","green","yellow"];

var gamePattern = [];

var userPattern = [];

var start = false;

var level = 0;


$(document).keypress(function()
{
  if(!start)
  {
    $("#levelTitle").text("Level "+level);
    nextSequence();
    start = true;
  }
});

$(".button").click(function() {
  var userColor=$(this).attr("id");

  userPattern.push(userColor);
  playSound(userColor);
  animatePress(userColor);
  check(userPattern.length-1);

})

function check(index)
{
  if(userPattern[index] === gamePattern[index] )
  {
  //  console.log("success");
    if(userPattern.length === gamePattern.length)
    {
      setTimeout(function(){nextSequence();},1000);
    }
  }
  else
  {
  //  console.log("Failed");
    playSound("wrong");
    $("body").addClass("failed");
    setTimeout(function(){$("body").removeClass("failed");},200);
    $("#levelTitle").text("Game Over. Press any key to restart");

    startOver();

  }

}

function nextSequence()
{
  userPattern = [];
  level++;
  $("#levelTitle").text("Level "+level);
  var rand =  Math.floor(Math.random()*4);
  //rand = Math.floor();
  var randomColor = buttonColor[rand];
  gamePattern.push(randomColor);

  $("#"+randomColor).fadeIn(100).fadeOut(100).fadeIn(100);

  playSound(randomColor);

  //var playSound = new Audio("sounds/"+randomColor+".mp3").play();

}




function playSound(name)
{
  var aud = new Audio("sounds/"+name+".mp3").play();
}

function animatePress(color)
{
  $("#"+color).addClass("pressed");
  setTimeout(function(){$("#"+color).removeClass("pressed");},100);
}

function startOver()
{
  gamePattern = [];
  start = false;
  level = 0;


}
