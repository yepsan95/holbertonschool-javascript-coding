process.stdin.setEncoding('utf8');

console.log('Welcome to Holberton School, what is your name?');

process.stdin.on('readable', function() {
  const name = process.stdin.read();
  process.stdout.write(`Your name is: ${name}`);
});

process.stdin.on('end', function() {
  process.stdout.write('This important software is now closing');
});
