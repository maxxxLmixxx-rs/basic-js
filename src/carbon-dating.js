const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  return /[0-9.]{1, 4}/.test(sampleActivity) ? Math.ceil(
    Math.log(MODERN_ACTIVITY/sampleActivity)/HALF_LIFE_PERIOD
  ) : false;
};
