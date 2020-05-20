var quoteMaster = [
  {
    quote: "I know the sky is not the limit because there are footprints on the Moon - and I made some of them!",
    name: "– Buzz Aldrin",
  },

  {
    quote: "I'm sure the universe is full of intelligent life. It's just been too intelligent to come here.",
    name: "- Arthur C. Clarke",
  },

  {
    quote:
      "I don't think the human race will survive the next thousand years, unless we spread into space. There are too many accidents that can befall life on a single planet. But I'm an optimist. We will reach out to the stars.",
    name: "- Stephen Hawking",
  },

  {
    quote: "NASA spent millions of dollars inventing the ball-point pen so they could write in space. The Russians took a pencil.",
    name: "- Anonymous",
  },

  {
    quote:
      "Space is for everybody. It’s not just for a few people in science or math, or for a select group of astronauts. That’s our new frontier out there, and it’s everybody’s business to know about space",
    name: "– Christa McAuliffe",
  },

  { quote: "Gravity hurts.", name: "– Viktor Alexandrov" },

  { quote: "When I first looked back at the Earth, standing on the Moon, I cried.", name: "– Alan Shepherd" },

  {
    quote:
      "One of the basic rules of the universe is that nothing is perfect. Perfection simply doesn’t exist…..Without imperfection, neither you nor I would exist",
    name: "– Stephen Hawking",
  },

  {
    quote:
      "Remember to look up at the stars and not down at your feet. Try to make sense of what you see and wonder about what makes the Universe exist. Be curious. And however difficult life may seem, there is always something you can do and succeed at. It matters that you don’t just give up.",
    name: "– Stephen Hawking",
  },
];
num = quoteMaster.length;

var quoteRendered = document.getElementById("h3");

var quoteRenderedBy = document.getElementById("h4");

var handler = function (event) {
  for (var i = 0; i < num; i++) {
    var x = Math.floor(Math.random() * num);
    var quoteText = quoteMaster[x].quote;
    var quoteTextBy = quoteMaster[x].name;
  }
  quoteRendered.innerHTML = quoteText;
  quoteRenderedBy.innerHTML = quoteTextBy;
};

var button = document.getElementById("but");

button.addEventListener("click", handler);
