// write a function that takes in a day (D), X number of days, and returns the day X days later

// 1. find the index of input "d" against days of the week
// 2. apply "x" to offset the found index
// 3. apply modulo operator by total number of days (7) to revolve offset index around valid day range
// 4. return resulting day by that computed index

function getWeekDayFromOffset(d, x) {
  // Array of week days
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  // Find index of input day "d"
  const dIndex = days.indexOf(d);

  // Take add "x" offset to index of "d", and apply modulo % to
  // revolve back through array
  const xIndex = (dIndex + x) % days.length;

  // Return the day for offset "xIndex"
  return days[xIndex];
}

console.log("returns Fri:", getWeekDayFromOffset("Wed", 2));
console.log("returns Thu:", getWeekDayFromOffset("Sat", 5));