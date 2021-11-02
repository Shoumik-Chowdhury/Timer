let inp = process.argv.map(x => Number(x)).filter(x => x > 0);

for (let val of inp) {
  setTimeout(() => {process.stdout.write('\x07');}, (val * 1000));
};