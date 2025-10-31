const { NotImplementedError } = require("../lib");

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  const emailArr = email.split("");
  let index = emailArr.lastIndexOf("@");
  let result = emailArr.slice(index + 1, email.length);
  return result.join("");
}

module.exports = {
  getEmailDomain,
};
