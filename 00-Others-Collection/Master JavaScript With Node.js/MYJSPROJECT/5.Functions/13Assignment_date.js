/**
 * Write a JavaScript function that accepts a date and print the day of a week for this date. If date is not
 *  passed then print output as ‘Invalid date’.
 */
function getDayOfWeek(date) {
  // Check if the argument passed is a valid date object
  if (!(date instanceof Date) || isNaN(date)) {
    return "Invalid date";
  }

  // Array to store names of the days of the week
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  // Get the day of the week (0 for Sunday, 1 for Monday, ..., 6 for Saturday)
  const dayIndex = date.getDay();

  // Return the corresponding day of the week
  return daysOfWeek[dayIndex];
}

// Example usage:
console.log(getDayOfWeek(new Date())); // Output: Name of the day of the week for today's date
// console.log(getDayOfWeek(new Date(2023, 11, 25)));
console.log(new Date(2023, 11, 25).toString()); // Output: Name of the day of the week for a specific date
console.log(getDayOfWeek()); // Output: Invalid date
