let timeDelay = 100;
const spinner = ` |/-\\|/=\\|`
for(let char of spinner) {
  setTimeout(() => {
    process.stdout.write(`\r${char}    `);
  }, timeDelay);
  timeDelay += 200; 
}
