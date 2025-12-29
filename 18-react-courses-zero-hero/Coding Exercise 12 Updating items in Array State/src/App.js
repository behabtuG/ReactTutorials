import React from "react";
import { getRandomEmoji } from "./components/utilities";

// Don't change constants
export const emojisDefault = [
  { id: 1, value: "🍋" },
  { id: 2, value: "🍒" },
  { id: 3, value: "🍊" },
  { id: 4, value: "💎" },
  { id: 5, value: "🍉" },
];

// Don't rename the "App" component
function App() {
  const [emojis, setEmojis] = React.useState(emojisDefault);

  // function updateEmoji(id, value) {
  //   const newEmoji = { id, value };

  //   // TODO: Update emoji value in the `emojis` array
  //   setEmojis((prevEmojis) =>
  //     prevEmojis.map((emoji) =>
  //       emoji.id === id ? { ...emoji, value: newEmoji.value } : emoji
  //     )
  //   );
  // }

  //or
  function updateEmoji(id, value) {
    setEmojis((prevEmojis) =>
      prevEmojis.map((emoji) => (emoji.id === id ? { ...emoji, value } : emoji))
    );
  }

  // Don't change `handleGenerate` function
  function handleGenerate() {
    for (let i = 0; i < emojis.length; i++) {
      setTimeout(() => {
        updateEmoji(emojis[i].id, getRandomEmoji());
      }, i * 100);
    }
  }

  // Don't change the implemnetation
  return (
    <section>
      <h2>Check you luck or dev skills</h2>
      <p>Create the line of identical emojis</p>
      <ul>
        {emojis.map(({ id, value }, index) => (
          <li key={id}>{value}</li>
        ))}
      </ul>

      <button onClick={handleGenerate}>Generate</button>
    </section>
  );
}

export default App;
