// Function to translate the text
async function translateText() {
    const inputText = document.getElementById("input-text");
    const language = document.getElementById("language-select");
    const screen = document.getElementById("translated-text");
  
    if (inputText.value.trim() === "") {
      screen.textContent = "";
      return;
    }
  
    // Fetch API for real-time translation
    const apiUrl = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(inputText.value)}&langpair=en|${language.value}`;
  
    try {
      let response = await fetch(apiUrl);
      let data = await response.json();
  
      let translatedText = data.responseData.translatedText;
  
      // Display the translated text
      screen.textContent = translatedText;
    } catch (error) {
      console.error("Error fetching translation:", error);
      screen.textContent = "Translation failed. Please try again.";
    }
  }
  
  