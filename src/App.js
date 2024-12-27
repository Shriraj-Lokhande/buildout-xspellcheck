import React, { useState } from 'react';
import './App.css';

const customDictionary = {
  teh: "the",
  wrok: "work",
  fot: "for",
  exampl: "example"
};

const XSpellCheck = () => {
  const [inputText, setInputText] = useState('');
  const [suggestion, setSuggestion] = useState('');

  const handleChange = (e) => {
    const text = e.target.value;
    setInputText(text);

    // Split the input text into words
    const words = text.split(' ');

    // Check for the first misspelled word
    for (let word of words) {
      const lowerCaseWord = word.toLowerCase();
      if (customDictionary[lowerCaseWord]) {
        setSuggestion(`Did you mean: ${customDictionary[lowerCaseWord]}?`);
        return;
      }
    }

    // If no misspelled word is found
    setSuggestion('');
  };

  return (
    <div className="App">
      <h1>Spell Check & Auto-Correction</h1>
      <textarea
        value={inputText}
        onChange={handleChange}
        placeholder="Enter text..."
        rows="7"
        cols="40"
      />
      {suggestion && <p className="suggestion">{suggestion}</p>}
    </div>
  );
};

export default XSpellCheck;
