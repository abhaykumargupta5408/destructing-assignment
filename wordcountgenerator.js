function countOccurrences() {
    // Get the input text from the textarea
    var inputText = document.getElementById("input-text").value;
  
    // Remove leading/trailing white spaces
    inputText = inputText.trim();
  
    // Split the text into individual words
    var words = inputText.split(/\s+/);
  
    // Create an empty object to store word counts
    var wordCounts = {};
  
    // Iterate over each word
    for (var i = 0; i < words.length; i++) {
      var word = words[i];
  
      // Check if the word is already in the object
      if (wordCounts.hasOwnProperty(word)) {
        // If it is, increment its count by 1
        wordCounts[word] += 1;
      } else {
        // If it's not, add it to the object with a count of 1
        wordCounts[word] = 1;
      }
    }
  
    // Display the word counts in the HTML
    var wordCountsContainer = document.getElementById("word-counts");
    wordCountsContainer.innerHTML = "";
  
    for (var word in wordCounts) {
      if (wordCounts.hasOwnProperty(word)) {
        var count = wordCounts[word];
  
        var wordCountElement = document.createElement("p");
        wordCountElement.innerText = word + ": " + count;
  
        wordCountsContainer.appendChild(wordCountElement);
      }
    }
  }
  