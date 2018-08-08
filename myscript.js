//Declaring And Initializing variables

var temperatureInCelsius;
temperatureInCelsius = 40;
var celsiusToFahrenheit;
var temperatureInFahrenheit;
temperatureInFahrenheit= 104;
var fahrenheitToCelsius;

//converting temp from celcius to fahrenheit
celsiusToFahrenheit = ((temperatureInCelsius*9)/5)+32;

//converting temp from fahrenheit to celcius
fahrenheitToCelsius = (temperatureInFahrenheit - 32) * 5 / 9;

//log temp into console
console.log('Temperature of'+" "+ temperatureInCelsius +" "+'celsius, will be'+ " "+ celsiusToFahrenheit +" " + 'fahrenhite');
console.log('Temperature of'+" "+ temperatureInFahrenheit +" "+'celsius, will be'+ " "+ fahrenheitToCelsius +" " + 'fahrenhite');