const sentence = "Hello World, and happy hacking! Welcome to the livestream";

function reverseWords(str) {
  return str
    .split(" ")
    .map((word) =>
      word
        .split(/([a-zA-Z]+)/)
        .map((word) => word.split("").reverse().join("")) // map over word without punctuation
        .join("")
    )
    .join(" ");
}

console.log(reverseWords(sentence));
