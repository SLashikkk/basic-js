const { NotImplementedError } = require("../lib");

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  if (!Array.isArray(arr)) {
    return false;
  }
  const result = [];
  let discarded = false;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "--double-next") {
      discarded = false;
      if (i + 1 < arr.length) {
        result.push(arr[i + 1]);
        result.push(arr[i + 1]);
        i++;
      }
    } else if (arr[i] === "--discard-prev") {
      if (!discarded && result.length > 0) {
        result.pop();
      }
      discarded = false;
    } else if (arr[i] === "--discard-next") {
      discarded = false;
      if (i + 1 < arr.length) {
        discarded = true;
        i++;
      }
    } else if (arr[i] === "--double-prev") {
      if (!discarded && result.length > 0) {
        result.push(result[result.length - 1]);
      }
      discarded = false;
    } else {
      result.push(arr[i]);
    }
  }

  return result;
}

module.exports = {
  transform,
};
