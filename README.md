# Conditional Rendering in Vanilla JavaScript

This project demonstrates various **conditional rendering techniques** using **vanilla JavaScript**, mimicking common practices from React.

## **Techniques Used:**

1. **Ternary Operator:**
   - Checks if bookmarks exist and maps them into a string or shows a default message.

2. **If-Else Statement:**
   - Handles rendering logic based on whether bookmarks are available.

3. **Logical AND (`&&`) Operator:**
   - Prints additional information if a condition is met.

4. **Logical OR (`||`) Operator:**
   - Provides a default message when no bookmarks are found.

5. **Switch-Case Statement:**
   - Displays messages based on different reading times.

## **Code Example:**
```javascript
const readingTime = 10;
const bookMarks = [
  { title: "JavaScript Basics" },
  { title: "React Hooks" },
  { title: "Node.js Guide" }
];

const bookmarksOutput = bookMarks && bookMarks.length > 0
  ? bookMarks.map((bookmark) => `Title: ${bookmark.title}`).join('\n')
  : "No bookmarks available.";

console.log(`Total read time: ${readingTime}`);
console.log(bookmarksOutput);

if (bookMarks && bookMarks.length) {
  console.log("Bookmarks available:");
  bookMarks.forEach((bookmark) => console.log(`- ${bookmark.title}`));
} else {
  console.log("No bookmarks available.");
}

bookMarks.length && console.log(`You have ${bookMarks.length} bookmarks.`);
const message = bookMarks.length || "No bookmarks found.";
console.log(message);

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

