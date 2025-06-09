# Domah Define

Domah Define is a simple web application that allows users to search for English word definitions, synonyms, antonyms, example sentences, and pronunciation audio using the [Free Dictionary API](https://dictionaryapi.dev/).

---

> **With respect and gratitude to the Domah Family, whose inspiration and support made this project possible.**

---

## Features

- **Word Search:** Enter any English word to get its definition.
- **Parts of Speech:** Displays the word type (noun, verb, etc.).
- **Synonyms & Antonyms:** Shows related words if available.
- **Example Sentences:** Provides example usage for the searched word.
- **Pronunciation Audio:** Listen to the correct pronunciation (if available).
- **User Feedback:** Loader animation and error messages for better user experience.

## How It Works

1. Enter a word in the search box and click the search button.
2. The app fetches data from the Free Dictionary API.
3. After a short loading animation, the app displays:
   - Part(s) of speech
   - Definition
   - Example sentence
   - Synonyms and antonyms
   - Pronunciation audio (if available)
4. If the word is not found or there is an error, a friendly message is shown.

## Getting Started

1. **Clone the repository:**
   ```
   git clone https://github.com/your-username/domah-define.git
   ```
2. **Open the project folder and launch `index.html` in your browser.**

## Project Structure

```
domah-define/
├── index.html
├── style.css
├── src/
│   └── index.js
└── README.md
```

## API Reference

- [Free Dictionary API](https://dictionaryapi.dev/)

## License

This project is licensed under the MIT License.
