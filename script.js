const messageComponents = {
  start: [
    "Believe in yourself",
    "Never forget",
    "Always remember",
    "Trust the process"
  ],

  middle: [
    "that hard work pays off",
    "that consistency is key",
    "that failure is part of success",
    "that discipline beats motivation"
  ],

  end: [
    "and keep going.",
    "even when it's hard.",
    "no matter what.",
    "every single day."
  ]
};

const randomElement = (array) => {
  return array[Math.floor(Math.random() * array.length)];
};

const motivation = () => {
  const start = randomElement(messageComponents.start);
  const middle = randomElement(messageComponents.middle);
  const end = randomElement(messageComponents.end);

  console.log(`${start}, ${middle}, ${end}`);
};

motivation()