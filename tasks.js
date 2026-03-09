// ============================================
// Task 1: Find Second Largest Number
// ============================================

function findSecondLargest(arr) {
    if (arr.length < 2) {
        console.log("Array must have at least 2 elements");
        return null;
    }

    let largest = -Infinity;
    let secondLargest = -Infinity;

    for (let num of arr) {
        if (num > largest) {
            secondLargest = largest;
            largest = num;
        } else if (num > secondLargest && num !== largest) {
            secondLargest = num;
        }
    }

    return secondLargest;
}

const numbers = [23, 45, 67, 89, 12, 90, 44];
const secondLargest = findSecondLargest(numbers);
console.log("Task 1 - Second Largest Number:", secondLargest); // Should be 89

// ============================================
// Task 2: Return Unique Elements
// ============================================

function getUniqueElements(arr1, arr2) {
    const combined = [...arr1, ...arr2];
    const uniqueSet = new Set(combined);
    return Array.from(uniqueSet);
}

// Example usage
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

function analyzeStudentScores(students) {
    // Calculate average score for each student
    const studentAverages = students.map(student => {
        const sum = student.scores.reduce((acc, score) => acc + score, 0);
        const average = sum / student.scores.length;
        return {
            name: student.name,
            average: average
        };
    });

    // Find student with highest average
    let topStudent = studentAverages[0];
    for (let i = 1; i < studentAverages.length; i++) {
        if (studentAverages[i].average > topStudent.average) {
            topStudent = studentAverages[i];
        }
    }

    // Log the result
    console.log(`Task 3 - Top Student: ${topStudent.name} with an average score of ${topStudent.average.toFixed(2)}`);
    
    return topStudent;
}

analyzeStudentScores(students);
// Expected: Charlie with average of 86.67

