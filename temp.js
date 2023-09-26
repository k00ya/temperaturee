// Function to generate a random number between 0 and a given limit
function rand(limit) {
    return Math.round(Math.random() * limit);
  }
  
  // Function to convert temperature from Fahrenheit to Celsius
  function convertToCelsius(tempInFahrenheit) {
    return (tempInFahrenheit - 32) * 5 / 9;
  }
  
  // Function to create a message based on temperature
  function createMessage(tempInFahrenheit, tempInCelsius) {
    let feeling = '';
  
    if (tempInCelsius <= 0) {
      feeling = 'It is freezing!';
    } else if (tempInCelsius > 0 && tempInCelsius <= 15) {
      feeling = 'It is cold.';
    } else if (tempInCelsius > 15 && tempInCelsius <= 25) {
      feeling = 'It is pleasant.';
    } else {
      feeling = 'It is hot!';
    }
  
    return `The temperature is ${tempInFahrenheit} Fahrenheit, which is ${tempInCelsius.toFixed(2)} Celsius. ${feeling}`;
  }
  
  // Initialization function
  function init() {
    const tempInFahrenheit = prompt("Enter a temperature in Fahrenheit:");
    const tempInCelsius = convertToCelsius(parseFloat(tempInFahrenheit));
    const randTemp = rand(100);
  
    const message = createMessage(tempInFahrenheit, tempInCelsius);
    
    console.log(message);
    document.getElementById("result").innerText = message + ` Random number: ${randTemp}`;
  }
  