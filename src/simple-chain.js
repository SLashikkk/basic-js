const { decorateObject } = require("../lib");
const { NotImplementedError } = require("../lib");

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  chain: [],

  getLength() {
    return this.chain.length;
  },

  addLink(value) {
    this.chain.push(String(value));
    return this;
  },

  removeLink(position) {
    if (typeof position !== 'number' || position < 1 || position > this.chain.length || !Number.isInteger(position)) {
      this.chain = [];
    }
    this.chain.splice(position - 1, 1);
    return this;
  },

  reverseChain() {
    this.chain.reverse();
    return this;
  },

  finishChain() {
    const result = this.chain.map(link => `( ${link} )`).join('~~');
    this.chain = [];
    return result;
  },
};


module.exports = {
  chainMaker,
};
