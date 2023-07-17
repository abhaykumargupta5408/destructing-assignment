function accessElements() {
    // Get the input array as a string
    var inputArray = document.getElementById("input-array").value;
  
    // Split the string into an array of numbers
    var numbers = inputArray.split(",").map(Number);
  
    // Destructure the array to access first, second, and last elements
    var [first, second, ...rest] = numbers;
    var last = rest.pop();
  
    // Create an array with the accessed elements
    var accessedElements = [first, second, last];
  
    // Display the accessed elements in the HTML
    var accessedElementsContainer = document.getElementById("accessed-elements");
    accessedElementsContainer.innerText = "Accessed Elements: [" + accessedElements.join(", ") + "]";
  }
  