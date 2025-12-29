// Don't change `getRandomEmoji` function
export function getRandomEmoji() {
  const emojisIcon = ["🍋", "🍒", "🍊", "💎", "🍉"];
  const randomIndex = Math.floor(Math.random() * emojisIcon.length);
  return emojisIcon[randomIndex];
}
