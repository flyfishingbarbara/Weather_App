$(document).ready(function(){
  //call location
  
  navigator.geolocation.getCurrentPosition(success, error);
  
function success(position) {
    var lat = position.coords.latitude;
    var lon = position.coords.longitude;
  weather(lat, lon);
}
  
  function error() {
  console.log('error');  
}
     // $("#data").html("latitude: " + position.coords.latitude + "<br>longitude: " + position.coords.longitude);  
  
  function weather(lat, lon) {
    var URL=`https://fcc-weather-api.glitch.me/api/current?lat=${lat}&lon=${lon}`;
    
    $.getJSON(URL, function(data){
    console.log(data);
      updateDOM(data);
      
    });

  }
     
  function updateDOM(data){
    var city=data.name;
    var tempC=Math.round(data.main.temp);
    var desc=data.weather[0].description;
    var icon=data.weather[0].icon;
    
    
    $("#city").html(city);
    $("#tempC").html(tempC);
    $("#desc").html(desc);
    $("#icon").attr("src", icon);
        
  
  $("#tempC").html(tempC + "&deg; C").hide();
  $("#tempF").html(Math.round((tempC*9/5 +32)) + "&deg; F");

      
    $("#convert").on("click", () => $(".temperature").toggle());
  
    
   if (desc === "broken clouds") {
     $("body").css("background-image", "url(https://images.pexels.com/photos/844297/pexels-photo-844297.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)" );
   }  else if (desc === "sunny"){
     $("body").css("background-image", "url(https://www.pexels.com/photo/air-atmosphere-beautiful-blue-531767/)");
   } else if (desc === "rain"){
     $("body").css("background-image", "url(https://images.pexels.com/photos/268941/pexels-photo-268941.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)");
   } else {
     $("body").css("background-image", "url(https://images.pexels.com/photos/209831/pexels-photo-209831.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)");
   }
  }
});


 

 

  //   $("#convert").on("click", function() {
  // $(".temperature").toggle();