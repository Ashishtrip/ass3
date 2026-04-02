// ============================================
// Task 1: Find Second Largest Number
// ============================================

/**
 * Task 1: Find Second Largest Number
 * Finds the second largest UNIQUE number in an array.
 * Enhanced validation for edge cases.
 * @param {number[]} arr - Input array of numbers
 * @returns {number|Object} Second largest or error object
 */
function findSecondLargest(arr) {
    if (!Array.isArray(arr) || arr.length < 2) {
        console.log("Task 1 - Second Largest Number: Array must have at least 2 elements");
        return { error: "Array must have at least 2 elements" };
    }

    let largest = -Infinity;
    let secondLargest = -Infinity;
    let hasSecond = false;

    for (let num of arr) {
        if (typeof num !== 'number') {
            console.log("Task 1 - Invalid input: All elements must be numbers");
            return { error: "All elements must be numbers" };
        }
        if (num > largest) {
            secondLargest = largest;
            largest = num;
            hasSecond = true;
        } else if (num > secondLargest && num < largest) {  // Strict < to ensure unique
            secondLargest = num;
            hasSecond = true;
        }
    }

    if (!hasSecond || secondLargest === -Infinity) {
        console.log("Task 1 - Second Largest Number: No second largest number found (all elements identical or insufficient unique values)");
        return { error: "No second largest number found (all elements identical)" };
    }

    return secondLargest;
}

const numbers = [23, 45, 67, 89, 12, 90, 44];
const secondLargest = findSecondLargest(numbers);
console.log("Task 1 - Second Largest Number:", secondLargest); // Should be 89

// ============================================
/**
 * Task 2: Return Unique Elements
 * Combines two arrays and returns unique elements preserving original order via Set.
 * Test cases in README.md
 * @param {Array} arr1 - First array
 * @param {Array} arr2 - Second array
 * @returns {Array} Unique elements from both arrays
 */
function getUniqueElements(arr1, arr2) {
    const combined = [...arr1, ...arr2];
    const uniqueSet = new Set(combined);
    return Array.from(uniqueSet);
}

// Example usage (more tests in README.md)
const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 6, 7];
const uniqueElements = getUniqueElements(array1, array2);
console.log("Task 2 - Unique Elements:", uniqueElements); // [1, 2, 3, 4, 5, 6, 7]

// ============================================
// Task 3: Student Score Analysis
// ============================================

const students = [
    { name: 'Alice', age: 22, scores: [78, 85, 92] },
    { name: 'Bob', age: 20, scores: [88, 90, 76] },
    { name: 'Charlie', age: 21, scores: [95, 80, 85] }
];

/**
 * Task 3: Student Score Analysis
 * Calculates average score for each student using map/reduce,
 * then finds student with highest average using loop.
 * @param {Array} students - Array of student objects {name, age, scores[]}
 * @returns {Object} Top student {name, average}
 */
function analyzeStudentScores(students) {
    if (!Array.isArray(students) || students.length === 0) {
        console.log("Task 3 - No students provided");
        return null;
    }

    // Step 1: Calculate average score for each student using map() and reduce()
    const studentAverages = students.map(student => {
        // reduce() sums scores, divide by length for average
        const sum = student.scores.reduce((acc, score) => acc + score, 0);
        const average = sum / student.scores.length;
        return {
            name: student.name,
            average: average
        };
    });

    // Step 2: Find student with highest average using simple loop (O(n))
    let topStudent = studentAverages[0];
    for (let i = 1; i < studentAverages.length; i++) {
        // Compare averages to find max
        if (studentAverages[i].average > topStudent.average) {
            topStudent = studentAverages[i];
        }
    }

    // Log formatted result
    console.log(`Task 3 - Top Student: ${topStudent.name} with an average score of ${topStudent.average.toFixed(2)}`);
    
    return topStudent;
}

analyzeStudentScores(students);
// Expected: Charlie with average of 86.67

