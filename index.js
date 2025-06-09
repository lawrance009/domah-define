document.getElementById('search-btn').addEventListener('click', () => {
  let word = document.getElementById('search').value.trim();
  if (word === "") {
      alert("Please enter a word");
      return;
  }

  let loader = document.getElementById("loader");
  let result = document.getElementById('result');
  
  // Show loader and hide result initially
  loader.style.display = "block";
  result.style.display = "none";
  result.classList.remove("show");

  setTimeout(() => {
      fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
      .then(response => response.json())
      .then(data => {
          // Ensure we get a valid response
          if (!data[0]) {
              result.innerHTML = "Word not found!";
              loader.style.display = "none";
              result.style.display = "block"; 
              result.classList.add("show");
              return;
          }

          // Loop through the meanings (in case there are multiple parts of speech)
          let meanings = data[0]?.meanings || [];
          let wordType = meanings.map(meaning => meaning.partOfSpeech).join(", ") || "Unknown";
          let meaning = meanings.length > 0 ? meanings[0]?.definitions[0]?.definition : "No definition found";
          let synonyms = meanings.length > 0 ? meanings[0]?.synonyms || [] : [];
          let antonyms = meanings.length > 0 ? meanings[0]?.antonyms || [] : [];
          let example = meanings.length > 0 ? meanings[0]?.definitions[0]?.example || "No example available" : "No example available";

          let synonymsText = synonyms.length ? synonyms.join(", ") : "No synonyms available";
          let antonymsText = antonyms.length ? antonyms.join(", ") : "No antonyms available";

          let audio = data[0]?.phonetics?.find(p => p.audio)?.audio || "";
          let audioPlayer = audio ? `<br><audio controls><source src="${audio}" type="audio/mpeg">Your browser does not support audio</audio>` : "<br>No pronunciation available";

          // Construct result display
          let resultContent = `
              <i>${wordType}</i> <br><br>
              <strong>${word}:</strong> ${meaning} <br><br>
              <strong>Ex:</strong> ${example} <br>
              <strong>Synonyms:</strong> ${synonymsText} <br>
              <strong>Antonyms:</strong> ${antonymsText} <br>
             
              ${audioPlayer}
          `;

          // Show the result and hide the loader with animation
          document.getElementById('result').innerHTML = resultContent;
          loader.style.display = "none";
          result.style.display = "block";
          result.classList.add("show");
      })
      .catch(error => {
          result.innerHTML = "An error occurred while fetching data.";
          loader.style.display = "none";
          result.style.display = "block";
          result.classList.add("show");
      });
  }, 3000); // Adjusted timeout for better UX
});
