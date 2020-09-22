let delay = 100;
let symbols = ['|', '/', '-', '\\', '|', '/', '-', '\\', '|'];

for (let symbol of symbols) {
  setTimeout(() => {
    process.stdout.cursorTo(0);
    process.stdout.write(symbol);
  }, delay);
  delay += 200;  
}

setTimeout(() => process.stdout.write('\n'), delay);
