const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;
const HALF_LIFE_REACTION = Math.log(2) / HALF_LIFE_PERIOD;

module.exports = function dateSample(sampleActivity) {  
  if (typeof sampleActivity !== "string"
      || sampleActivity <= 0 
      || sampleActivity > 15
      || !parseInt(sampleActivity)
  ) return false;
  
  return Math.ceil( 
      Math.log( MODERN_ACTIVITY / sampleActivity ) / HALF_LIFE_REACTION 
  );
};