// Conditional Rendering in Vanilla JavaScript (Logic Only)
// Here’s a collection of conditional rendering techniques in JavaScript:
//
// Example: Conditional Logic



const readingTime = 10; // Example reading time
const bookMarks = [
  { title: "JavaScript Basics" },
  { title: "React Hooks" },
  { title: "Node.js Guide" }
]; // Example bookmarks array

// Ternary operator: Checking if bookmarks exist
const bookmarksOutput = bookMarks && bookMarks.length > 0
  ? bookMarks.map((bookmark) => `Title: ${bookmark.title}`).join('\n')
  : "No bookmarks available.";

console.log(`Total read time: ${readingTime}`);
console.log(bookmarksOutput);

// Using if-else statement
if (bookMarks && bookMarks.length) {
  console.log("Bookmarks available:");
  bookMarks.forEach((bookmark) => console.log(`- ${bookmark.title}`));
} else {
  console.log("No bookmarks available.");
}

// Using logical AND (&&) operator for concise rendering
bookMarks.length && console.log(`You have ${bookMarks.length} bookmarks.`);

// Using logical OR (||) operator to provide default output
const message = bookMarks.length || "No bookmarks found.";
console.log(message);

// Switch-case example for different reading times
switch (true) {
  case readingTime > 30:
    console.log("Long read ahead!");
    break;
  case readingTime > 10:
    console.log("Medium-length read.");
    break;
  default:
    console.log("Quick read.");
}
