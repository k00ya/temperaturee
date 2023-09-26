// Converts Fahrenheit to Celsius
function convertToCelsius(fahren) {
    return (parseFloat(fahren) - 32) * (5 / 9);
  }
  
  // Creates a message based on the temperatures
  function createMessage(fahren, celc) {
    let feel = "";
    if (fahren < 32) {
      feel = "very cold";
    } else if (fahren < 64) {
      feel = "cold";
    } else if (fahren < 86) {
      feel = "warm";
    } else {
      feel = "hot";
    }
    return `The temperature is ${fahren}°F (${celc.toFixed(2)}°C) and it feels ${feel}.`;
  }
  
  // Generates a random integer between 0 and limit
  function rand(limit) {
    return Math.floor(Math.random() * (limit + 1));
  }
  
  // -------------------- DONT NOT CHANGE THE CODE BELOW ---------------------- //
  
  let fahren = prompt(
    "Enter a number, we will convert that number from Fahrenheit to Celsius."
  );
  let celc = convertToCelsius(fahren);
  let output = createMessage(fahren, celc);
  console.log(output);
  
  fahren = prompt(
    "Let's try that again. Enter a number, we will convert that number from Fahrenheit to Celsius."
  );
  celc = convertToCelsius(fahren);
  output = createMessage(fahren, celc);
  console.log(output);
  
  fahren = rand(110);
  celc = convertToCelsius(fahren);
  output = createMessage(fahren, celc);
  console.log(output);
  
  fahren = rand(110);
  celc = convertToCelsius(fahren);
  output = createMessage(fahren, celc);
  console.log(output);