export const validateIfTasksEmpty = (tasks) => {
  if (tasks && tasks.length !== 0) return true;
};
/**
 * Validates the date inputted by client.
 *
 * @param {string|Date} value The date value to validate.
 * @returns Returns true if date is valid (today or future), otherwise false
 */
export const validateDate = (value) => {
  const inputDate = new Date(value);
  inputDate.setHours(0, 0, 0, 0);
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return inputDate >= today;
};
/**
 * Validates the input data.
 *
 * @param {Object} data The input data to validate.
 * @returns Array of errors.
 */
export const validateTaskInput = (data) => {
  const errors = [];
  if (
    typeof data.name !== "string" ||
    data.name.trim().length < 2 ||
    data.name.trim().length > 64
  ) {
    errors.push(
      'Field "name" is required and minimum and maximum length is 2 and 64 characters respectively.'
    );
  }

  const objectIdPattern = /^[a-fA-F0-9]{24}$/;
  if (
    typeof data.categoryID !== "string" ||
    !objectIdPattern.test(data.categoryID)
  ) {
    errors.push('Field "categoryID" must be a valid id (24 hex characters).');
  }

  if (data.detail !== undefined) {
    if (typeof data.detail !== "string" || data.detail.length > 250) {
      errors.push(
        'Field "detail", if provided, must be a string with a maximum length of 250 characters.'
      );
    }
  }

  const allowedSignificance = ["high", "medium", "low"];
  if (
    typeof data.significance !== "string" ||
    !allowedSignificance.includes(data.significance.toLowerCase())
  ) {
    errors.push(
      'Field "significance" must be one of the allowed values: "high", "medium" nebo "low".'
    );
  }

  return errors;
};
