function isDate(input) {
  if (input instanceof Date) {
    // If input is already a Date object
    return !isNaN(input.getTime());
  } else if (typeof input === 'string' || typeof input === 'number') {
    // If input is a string or a number, try parsing it into a Date
    const parsedDate = new Date(input);
    return !isNaN(parsedDate.getTime());
  } else {
    // If input is neither a Date object, string, nor number
    return false;
  }
}
