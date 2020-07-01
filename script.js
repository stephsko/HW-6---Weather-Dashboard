var apiKey = "cef0695db416382b60413ff8d13e6a75";

function currentWeather(){
    navigator.geolocation.getCurrentPosition(function (position){
      longitude = position.coords.longitude;
      latitude = position.coords.latitude;
  
      var queryURL = "https://api.openweathermap.org/data/2.5/weather?lat=" + latitude + "&lon=" + longitude + "&appid=" +  apiKey;
  
      $.ajax({
    url: queryURL,
    method: "GET"
  })

    .then(function(response) {
      var iconCode = response.weather[0].icon;
      
      var iconurl = "http://openweathermap.org/img/w/" + iconCode + ".png";
      $(".city").html("<h1> " + response.name + " </h1>");
      $(".temp").text("Temperature: " + ((response.main.temp - 273.15) * 1.8 + 32).toFixed(0) + " °F");
      $(".humidity").text("Humidity: " + response.main.humidity + " %");
      $(".wind").text("Wind Speed: " + response.wind.speed + " MPH");
      $("#wicon").attr("src", iconurl);
    });
  
    });
  };
  
  