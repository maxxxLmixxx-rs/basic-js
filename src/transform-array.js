module.exports = function transform(toCopy) {
  if (!Array.isArray(toCopy)) throw new Error;
  const array = [...toCopy];
  const isCommand = (el) => String(el).startsWith('--');
  return array.reduce((array, _, ix) => {
    if ( isCommand(array[ix]) ) return array;
    // # previous #
    if (array[ix - 1] === '--discard-next')      
      array.splice(ix - 1, 2, '--discard');                       
    if (array[ix - 1] === '--double-next')       
      array.splice(ix - 1, 2, array[ix], array[ix]); 
    // # next #
    if (array[ix + 1] === '--discard-prev')      
      array.splice(ix, 2, '--discard');                       
    if (array[ix + 1] === '--double-prev')       
      array.splice(ix, 2, array[ix], array[ix]); 

    return array;
  }, array).filter(el => !isCommand(el));
};

