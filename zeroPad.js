// A simple function working properly only for integers i >= 0
// It can be useful e.g. when you need to index a variable name ('myVar_001', 'myVar_002', etc.)

zeroPad = function(i, padding) {
  if (i.toString().length < padding) {
    return '0'.repeat(padding - i.toString().length) + i
  } else {
    return i
  }
};
