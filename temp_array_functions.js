//Fahrenheit
var fahrenheit = 32 ;

// Conversions
var fahrenheitToCelsius = (fahrenheit - 32) / 1.8;
var fahrenheitToKelvin = (fahrenheit + 459.67) / 1.8;

//Log Prints
console.log("Starting with Fahrenheit");
console.log( "Fahrenheit: " + fahrenheit );
console.log( "Celsius: " + fahrenheitToCelsius );
console.log( "Kelvin: " + fahrenheitToKelvin );


//Celsius
var celsius = 0;

//Conversions
var celsiusToFahrenheit = (celsius * 1.8) + 32;
var celsiusToKelvin = (celsius + 273.15);

//Log Print
console.log("Starting with Celsius");
console.log( "Fahrenheit: " + celsiusToFahrenheit);
console.log( "Celsius: " + celsius );
console.log( "Kelvin: " + celsiusToKelvin );


//Kelvin
var kelvin = 273.15;

//Conversion
var kelvinToFahrenheit = (kelvin - 273.15) * 1.8 + 32;
var kelvinToCelsius = (kelvin - 273.15);

//Log Print
console.log("Starting with Kelvin");
console.log( "Fahrenheit: " + kelvinToFahrenheit );
console.log( "Celsius: " + kelvinToCelsius );
console.log( "Kelvin: " + kelvin );

//Temperature Conversion Arrays
var fahrenheitTemps = [ fahrenheit, fahrenheitToCelsius, fahrenheitToKelvin ];
var celsiusTemps = [ celsius, celsiusToFahrenheit, celsiusToKelvin ];
var kelvinTemps = [ kelvin, kelvinToFahrenheit, kelvinToCelsius ];