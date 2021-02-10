const args = process.argv.slice(2);

for (const char of args) {
  setTimeout(() => {
    console.log(char, "Beep")
    process.stdout.write('\x07')
  }, char * 1000)
}