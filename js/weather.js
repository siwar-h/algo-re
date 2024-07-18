console.log("hello world");
var str = prompt("write a sentance");
console.log("str", str);


function WeatherClothing( Kelvin){
    var temperate;
    var celsius=Kelvin - 273.15;
    if(celsius < 0){
        temperate ="Very cold:Wear a heavy coat, gloves, and a hat";
    }
    if(celsius >0 && celsius < 10){
        temperate= "cold:Wear a coat and a warm hat";
    }
    if(celsius >10 && celsius<20){
        temperate= "Temperate:A jacket or sweater should be fine";
    }
    if(celsius>20 && celsius<30){
        temperate= "Warm temperate:";

    }
    if(celsius>30 && celsius< 40 ){
        temperate= "Warm:A t-shirt and jeans are suitable";

    }
    if(celsius> 40){
       temperate= "Very hot:Wear light clothing, like shorts and a t-shirt";
    }
    return temperate ;

}
console.log(WeatherClothing( str))