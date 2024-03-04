process.stdin.setEncoding('utf8');

console.log('Welcome to Holberton School, what is your name?');

process.stdin.on('data', function(data) {
  process.stdout.write('Your name is: ' + data);
});

process.stdin.on('end', function() {
  process.stdout.write('This important software is now closing');
});
