module.exports = function repeater(string, options) {
  let { 
    repeatTimes = 1, separator = "+", addition = '',
    additionRepeatTimes = 1, additionSeparator = "|"
  } = options;

  string              = String(string);
  repeatTimes         = Number(repeatTimes);
  separator           = String(separator);
  addition            = String(addition);
  additionRepeatTimes = Number(additionRepeatTimes);
  additionSeparator   = String(additionSeparator);

  return Array.from({length: repeatTimes}).map(() => 
    string + 
    Array.from({length: additionRepeatTimes})
      .map(() => addition).join(additionSeparator)
  ).join(separator);
};
