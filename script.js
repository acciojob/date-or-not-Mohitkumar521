var isDate = function (input) {
  // Check if the input is a Date object
  if (input instanceof Date) {
    return true;
  }

  // Check if the input is a string that can be parsed into a valid date
  if (typeof input === 'string') {
    const parsedDate = new Date(input);
    // Check if the parsed date is a valid date
    return !isNaN(parsedDate.getTime());
  }

  // Check if the input is a number (timestamp) that can be converted to a valid date
  if (typeof input === 'number') {
    const timestampDate = new Date(input);
    // Check if the timestamp can be converted to a valid date
    return !isNaN(timestampDate.getTime());
  }

  // If none of the above conditions are met, return false
  return false;
};

// Do not change the code below.
const input = prompt("Enter Date.");
alert(isDate(input));

