const chainMaker = {
  chainedLinks: [],

  getLength() {
    return this.chainedLinks.length;
  },
  addLink(value = "") {
    this.chainedLinks.push(value);
    return this;
  },
  removeLink(position) {
    if (!position || position < 1 || position > this.getLength()) {
      this.chainedLinks = []; throw new Error();
    } 
    this.chainedLinks.splice(--position, 1);
    return this;
  },
  reverseChain() {
    this.chainedLinks.reverse();
    return this;
  },
  finishChain() {
    const linksToString = this.chainedLinks
      .map((value) => `( ${value} )`)
      .join("~~");
    this.chainedLinks = [];
    return linksToString;
  },
};

module.exports = chainMaker;
