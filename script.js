const messages = [
  "Believe in yourself and all that you are.",
  "Your limitation—it's only your imagination.",
  "Sometimes later becomes never. Do it now.",
  "Push yourself, because no one else is going to do it for you.",
  "Great things never come from comfort zones.",
  "Dream it. Wish it. Do it."
];

const motivation = () => {
  const randomNumber = Math.floor(Math.random() * messages.length);
  console.log(messages[randomNumber]);
};

motivation();

console.log('ça marche')
