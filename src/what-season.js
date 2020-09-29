module.exports = function getSeason(date) {
  if (!date) return "Unable to determine the time of year!"; 
  if (!date instanceof Date || isNaN(date)) throw new Error();
  const SEASONS = ["winter","winter","spring","spring","spring",
  "summer","summer","summer","autumn","autumn","autumn","winter"
  ]; return SEASONS[date.getMonth()];
};