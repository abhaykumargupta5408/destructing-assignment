function extractProperties() {
    // Sample object representing a person
    var person = {
      name: "John Doe",
      age: 30,
      address: {
        street: "BB,block B, Industial Area",
        city: "Sector 62, Noida",
        state: "Uttar Pradesh",
      }
    };
  
    // Extract name and street properties using object destructuring
    var { name, address: { street } } = person;
  
    // Create an object with the extracted properties
    var extractedProperties = { name: name, street: street };
  
    // Display the extracted properties in the HTML
    var extractedPropertiesContainer = document.getElementById("extracted-properties");
    extractedPropertiesContainer.innerText = "Extracted Properties: " + JSON.stringify(extractedProperties);
  }
  