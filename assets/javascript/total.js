/**
 * 
 *  this is the total.js file
 * 
 */

 // set the number right and wrong
 var right = 0;
 var wrong = 0;
 localStorage.getItem("right", right);
 localStorage.getItem("wrong", wrong);
 
 $("#correctAns").text(right);
 $("#inCorrectAns").text(wrong);
 
 setInterval(function () { 
     location.href = "game.html";
 }, 10000);