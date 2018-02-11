// A simple function working properly only for integers i >= 0
// It can be useful e.g. when you need to index a variable name ('myVar_001', 'myVar_002', etc.)

zeroPad = function(i, padding) {
  return `${i}`.padStart(padding, 0)
};
