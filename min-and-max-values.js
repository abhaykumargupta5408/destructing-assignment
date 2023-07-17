function findMinMax() {
    // Get the input array as a string
    var inputArray = document.getElementById("input-array").value;
  
    // Split the string into an array of numbers
    var numbers = inputArray.split(",").map(Number);
  
    // Find the minimum and maximum values using the spread operator
    var min = Math.min(...numbers);
    var max = Math.max(...numbers);
  
    // Create an object with the min and max values
    var minMaxValues = { min: min, max: max };
  
    // Display the min and max values in the HTML
    var minMaxValuesContainer = document.getElementById("min-max-values");
    minMaxValuesContainer.innerText = "Min and Max Values: " + JSON.stringify(minMaxValues);
  }
  