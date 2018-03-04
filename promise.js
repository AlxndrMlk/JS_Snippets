let promiseToPlayGMajorChord = new Promise(function(resolve, reject) {

  // trying hard to play G major and not to add altered 9th

  let isGMajor = Math.random() > .5;

  if (isGMajor) {
    resolve('G Major. Mazal tov!');
  } else {
    reject('not G Major. How bad. This is not jazz.');
  }

});

promiseToPlayGMajorChord.then(function(fromResolve) {
  console.log('This is ' + fromResolve);
}).catch(function(fromReject){
	console.log('This is ' + fromReject);
})
