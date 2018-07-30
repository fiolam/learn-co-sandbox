$(document).ready(function(){
//  debugger;
//1.grab the element that you want to "listen to"
//2.tell your codewhat event you care about 
//3. Tell your code what to do when the event occurs
  $("#guess-btn").on("click", myCallBack) 

})
function myCallBack(){
  
  //1.generate a number from 1-10
const randomNumber = Math.floor((Math.random() * 10) + 1);


  //2.selet the input element and get the number that the user typed in
const guessNumberString = $("#guess-number").val()
const guessNumber= parseInt(guessNumberString)

//if the numbers are the same do something otherwise do something else.
  //3.compare the two numbers
  //4.if the numbers are the same put YOU WIN! in the results div
  if(guessNumber > 10 || guessNumber < 1 ){
    alert('YOU ARE A DUMMY!,please enter a number betwen 1-10');
    
  } else if  (randomNumber===guessNumber){
    
$("results").html("you guessed: " + guessNumber + " and the answer was " + randomNumber + ", You WON!")
} else {
  $("#results").html("you guessed: " + guessNumber + " and the answer was " + randomNumber + ", You lost!")

}
}