let promiseToPlayGMajorChord = new Promise(function(resolve, reject) {

  // trying hard to play G major chord and not to add altered 9th

  let isGMajor = Math.random() > .5;

  isGMajor ? resolve('G Major. Mazal tov!') : reject('not G Major. How bad. This is not jazz.');

});

promiseToPlayGMajorChord
  .then(fromResolve =>
      console.log('This is ' + fromResolve))
  .catch((fromReject) =>
      console.log('This is ' + fromReject));
