//Change city to whatever you like, This only displays the city weather anyways

var City = "Auckland";

//Using the api key to get info on the weather along with the icons
$.getJSON("http://api.openweathermap.org/data/2.5/weather?q=" + City + "&units=metric&appid=41b67b520170da61ec4cc9ea9764d19a", function(data){
    var icon = "https://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
    var temp = Math.floor(data.main.temp);
    var weather = data.weather[0].main;
    $('.icon').attr('src', icon);
    $('.weather').append(weather);
    $('.temp').append(temp);
});