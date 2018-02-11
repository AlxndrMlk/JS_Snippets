zeroPad = function(i, padding) {
  if (i.toString().length < padding) {
    return '0'.repeat(padding - i.toString().length) + i
  }
};
