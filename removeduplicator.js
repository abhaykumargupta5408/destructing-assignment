function removeDuplicates() {
    // Get the input numbers as a string
    var inputNumbers = document.getElementById("input-numbers").value;
  
    // Split the string into an array of numbers
    var numbers = inputNumbers.split(",").map(Number);
  
    // Remove duplicates using a Set
    var uniqueElementsSet = new Set(numbers);
  
    // Convert the set to an array
    var uniqueElements = Array.from(uniqueElementsSet);
  
    // Display the unique elements in the HTML
    var uniqueElementsContainer = document.getElementById("unique-elements");
    uniqueElementsContainer.innerHTML = "Unique Elements: " + uniqueElements.join(", ");
  }
  