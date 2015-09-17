//Fahrenheit Conversion and Read
var fahrenheit = function(temp){

    //Conversions
    var celsiusOutput = (temp - 32) / 1.8;
    var kelvinOutput = (temp + 459.67) / 1.8;

    //Logs
    console.log("Fahrenheit Conversion");
    console.log( "Fahrenheit: " + temp + "F");
    console.log( "Celsius: " + celsiusOutput + "C");
    console.log( "Kelvin: " + kelvinOutput + "K");
   if (temp <= 32) {
        console.log("It is currently below freezing.");
    }
    else if (temp >= 212) {
        console.log("It is currently hot enough to boil water.");
    }
    else {

   }
};

//Fahrenheit Call
fahrenheit(100);



//Celsius Conversion and Read
var celsius = function(temp){

    //Conversions
    var fahrenheitOutput = (temp * 1.8) + 32;
    var kelvinOutput = (temp + 273.15);

    //Logs
    console.log("Celsius Conversion");
    console.log( "Celsius: " + temp );
    console.log( "Fahrenheit: " + fahrenheitOutput );
    console.log( "Kelvin: " + kelvinOutput );
};

//Celsius Call
celsius(50);


//Kelvin Conversion and read
var kelvin = function(temp){

    //Conversions
    var fahrenheitOutput = (temp - 273.15) * 1.8 + 32;
    var celsiusOutput = (temp - 273.15);

    //Logs
    console.log("Kelvin Conversion");
    console.log( "Kelvin: " + temp );
    console.log( "Fahrenheit: " + fahrenheitOutput );
    console.log( "Celsius: " + celsiusOutput );
};

//Kelvin Call
kelvin(550);

//Array to change all conversions at once
var allConversions = [ fahrenheit(98) , celsius(19) , kelvin(1000) ];

