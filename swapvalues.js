function swapValues() {
    // Get the input values for x and y
    var x = document.getElementById("input-x").value;
    var y = document.getElementById("input-y").value;
  
    // Swap values using destructuring assignment with an array
    [x, y] = [y, x];
  
    // Display the swapped values in the HTML
    var swappedValuesContainer = document.getElementById("swapped-values");
    swappedValuesContainer.innerText = "Swapped Values: [" + x + ", " + y + "]";
  }
  