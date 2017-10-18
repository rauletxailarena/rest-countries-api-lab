var url = "https://restcountries.eu/rest/v2/all"

var addCountriesToList = function( countries ) {
  var ul = document.getElementById("countries");
  countries.forEach( function(country) {
    var li = document.createElement("li")
    li.innerText = country.name
    ul.appendChild(li)
  })
}

var makeRequest = function( url ) {
  var request = new XMLHttpRequest();
  request.open( "GET", url );
  request.addEventListener( "load", function() {
    var countries = JSON.parse( this.responseText );
    // addCountriesToList( countries )
    populateDropdown(countries);
  })
  request.send()
}

var button = document.getElementById("btn");
button.addEventListener("click", function(){
  makeRequest(url);
});

var buttonClear = document.getElementById("clear");
buttonClear.addEventListener("click", function(){
    var ul = document.getElementById("countries");
  while(ul.firstChild) {
    ul.removeChild(ul.firstChild)
  }
  // ul.innerHTML = "";
});

var populateDropdown = function(countries){
  var select = document.getElementById("select");

  for(var country of countries){
    var option = document.createElement("option");
    option.innerText = country.name;
    select.appendChild(option);
  }
}
