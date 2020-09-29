module.exports = class DepthCalculator {
  
  REGEX = {
    leftBracketsSequence: /\[+/g
  }

  __leaveOnlyBrackets(array) {
    return [...JSON.stringify(array)]
    .filter(sym => sym == '[' || sym == ']')
    .join('');
  }

  __calculateDepth(array) {
    let brackets = this.leaveOnlyBrackets(array).slice(1, -1);
    let bracketSequences = brackets ? brackets.match(this.REGEX.leftBracketsSequence) : [];
    return bracketSequences.reduce((max, el) => el.length > max ? el.length : max, 0) + 1; 
  }
  
  ___calculateDepth(array) {
    return Array.isArray(array) ?
    1 + array.reduce( (max, el) => Math.max(max, this.calculateDepth(el)), 0)
    : 0
  }

  calculateDepth(array) {
    return Array.isArray(array) ?
    !array[0] ? 1 : 1 + Math.max(...array.map(el => this.calculateDepth(el)))
    : 0;
  }

};