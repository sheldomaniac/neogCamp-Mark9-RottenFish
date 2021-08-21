import React, { useState } from "react";
import "./styles.css";

var emojiLibrary = {
  "😊": "smiling",
  "😂": "laughing",
  "🥡": "takeout box",
  "😟": "sad face",
  "💓": "love",
  "👏": "clapping"
};

var emojisWeKnow = Object.keys(emojiLibrary);

export default function App() {
  const [meaning, setMeaning] = useState(" ");

  function emojiInputHandler(event) {
    var userInput = event.target.value;
    var meaning = emojiLibrary[userInput];

    if (userInput === "") meaning = "";

    if (meaning === undefined) {
      meaning = "Sorry, we do not have this in our database";
    }

    setMeaning(meaning);
  }
  function emojiClickHandler(emoji) {
    var meaning = emojiLibrary[emoji];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1>Emoji-fy</h1>
      <input type="text" onChange={emojiInputHandler} />
      <h2>{meaning}</h2>
      <div>Emojis we know:</div>
      {emojisWeKnow.map(function (emoji) {
        return (
          <span key={emoji} onClick={() => emojiClickHandler(emoji)}>
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
