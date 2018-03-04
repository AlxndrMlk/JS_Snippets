let promiseToPlayGMajorChord = new Promise(function(resolve, reject) {

  //playing a chord

  let isGMajor = Math.random() > .5;

  if (isGMajor) {
    resolve('G Major. Mazal tov!');
  } else {
    reject('not G Major. How bad. You should not play jazz here.');
  }

});

promiseToPlayGMajorChord.then(function(fromResolve) {
  console.log('This is ' + fromResolve);
}).catch(function(fromReject){
	console.log('This is ' + fromReject);
})
