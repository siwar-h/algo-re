console.log("hello world");
var str = prompt("write a sentance");
console.log("str", str);


function LeapYear(year){
    var leap = "Leap year: ";
    var not = "Not a leap year: ";
    if((year % 4 ==0 && year % 100 !==0 )|| year % 400 ==0 ){
        return leap + year;
    }
        return not + year;
        
}
console.log(LeapYear(str) )
