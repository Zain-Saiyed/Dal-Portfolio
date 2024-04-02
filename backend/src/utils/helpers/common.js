/**
 * Checks if a value is empty.
 * @param value - The value to check.
 * @returns True if the value is empty, false otherwise.
 */
const isEmpty = (value) => {
  return (
    value === null ||
    value === undefined ||
    value === "" ||
    (Array.isArray(value) && value.length === 0) ||
    (typeof value === "object" && Object.keys(value).length === 0)
  );
};

export default isEmpty;
