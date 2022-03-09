var City = "Auckland";


$.getJSON("http://api.openweathermap.org/data/2.5/weather?q=" + City + "&units=metric&appid=41b67b520170da61ec4cc9ea9764d19a", function(data){
    console.log(data);
    var icon = "https://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
    var temp = Math.floor(data.main.temp);
    var weather = data.weather[0].main;
    $('.icon').attr('src', icon);
    $('.weather').append(weather);
    $('.temp').append(temp);
});