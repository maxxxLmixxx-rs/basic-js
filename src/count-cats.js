module.exports = function countCats(matrix) {
  //? # 1 // Simple
  return matrix.flat().filter(el => el === '^^').length;
  
  //? #2 // Fast
  // let catEarsNum = 0;
  // for (let innerMx of matrix) {
  //   let res = innerMx.indexOf('^^');
  //   while (res > -1) {
  //     catEarsNum++;
  //     res = innerMx.indexOf('^^', ++res);
  //   } } return catEarsNum;
};
