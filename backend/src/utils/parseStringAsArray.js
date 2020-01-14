module.exports = function parseStringAsAarray(arrayAsString) {
  return arrayAsString.split(',').map(tech => tech.trim());
}