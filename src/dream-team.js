module.exports = function createDreamTeam(members) {
  return Array.isArray(members) ? members
    .filter(name => typeof name === 'string')
    .map(name => name.trim()[0].toUpperCase())
    .sort().join('')
    : false;
};