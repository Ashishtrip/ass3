# Assignment 3 - JavaScript Tasks

## Overview

This project implements 4 JavaScript tasks with improvements for validation, comments, test cases, and UX.

## Task 1: Find Second Largest Number

**Purpose:** Finds the second largest unique number in an array.

**Edge Case Handling:**

- Arrays with < 2 elements: Returns `{error: "Array must have at least 2 elements"}`.
- All duplicates: Returns `{error: "No second largest number found (all elements identical)"}`.
- Normal case: Returns the second largest.

**Test Cases (run in console):**

```js
console.log(findSecondLargest([])); // {error: "Array must have at least 2 elements"}
console.log(findSecondLargest([5])); // {error: "Array must have at least 2 elements"}
console.log(findSecondLargest([3, 3, 3])); // {error: "No second largest number found..."}
console.log(findSecondLargest([23, 45, 67, 89, 12, 90, 44])); // 89
```

## Task 2: Return Unique Elements

**Purpose:** Combines two arrays and returns unique elements using Set.

**Test Cases (run in console):**

```js
getUniqueElements([], []); // []
getUniqueElements([1, 1, 1], [1, 1]); // [1]
getUniqueElements([1, 2, 3], [3, 4, 5]); // [1,2,3,4,5]
getUniqueElements([1, 2], [1, 2]); // [1,2]
```

## Task 3: Student Score Analysis

**Purpose:** Calculates average scores and finds top student.

**Example:**

```js
const students = [
  { name: "Alice", age: 22, scores: [78, 85, 92] },
  { name: "Bob", age: 20, scores: [88, 90, 76] },
  { name: "Charlie", age: 21, scores: [95, 80, 85] },
];
analyzeStudentScores(students); // "Top Student: Charlie with an average score of 86.67"
```

## Task 4: Countdown Timer

- Open `index.html` in browser.
- **Features:** Start/Pause/Reset one-hour timer, persistent pause status, button states (start disabled while running).
- Visual feedback for end/pause.

## Running

- Console tasks: Open browser dev tools, load index.html, run functions.
- Timer: `open index.html`
