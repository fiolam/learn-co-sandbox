$(document).ready(function(){

  getJokeListener();
});
  
function getJokeListener () {

  $("button").on("click", getJoke);

}
function getJoke () {
     $.ajax({ 
    url:"https://icanhazdadjoke.com",
    data:'json',
    success: successFunction,
    failure: failureFunction,
})
}
function getJoke(Response){
response.forEach(function(repo){
 $('ul').html(getJoke)
})
}

/*const getJoke = () => {

let headers = new Headers({'Accept':'application/json'})
let request = new Request ('https://icanhazdadjoke.com/',{headers: headers});
fetch(request)
 .then(function(response){

  return response.json();
 })
 .then(function(jokeJson){
   putJokeOnPage(jokeJson)
});
 }
 const putJokeOnPage = (jokeJson) => {

 $('ul').html(jokeJson.joke)
}*/