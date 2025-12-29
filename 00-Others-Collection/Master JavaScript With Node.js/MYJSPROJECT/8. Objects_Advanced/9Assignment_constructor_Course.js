/**
 *
 * Define a constructor function named as Course that accepts arguments such as courseName, tuitionFees, duration.
 *  Invoke this constructor function with and without ‘new’ keyword. Print ‘Welcome’ message if invoke using ‘new’
 * keyword.
 *
 *
 */

function Course(courseName, tuitionFees, duration) {
  this.courseName = courseName;
  this.tuitionFees = tuitionFees;
  this.duration = duration;

  if (new.target) {
    console.log("Welcome!");
  }
}

// Invoking Course constructor function with 'new' keyword
const courseWithNewKeyword = new Course(
  "JavaScript Programming",
  1000,
  "3 months"
);

// Invoking Course constructor function without 'new' keyword
const courseWithoutNewKeyword = Course("Python Programming", 1200, "2 months");

console.log("Course with 'new' keyword:", courseWithNewKeyword);
console.log("Course without 'new' keyword:", courseWithoutNewKeyword);
