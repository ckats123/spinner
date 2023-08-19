process.stdout.write('hello from spinner1.js... \rheyyy\n');
//output: heyyy from spinner1.js...

setTimeout(() => {
    process.stdout.write('\r|   ');
  }, 100);
  
  setTimeout(() => {
    process.stdout.write('\r/   ');
  }, 300);
  
  setTimeout(() => {
    process.stdout.write('\r-   ');
  }, 500);
  
  setTimeout(() => {
    // Need to escape the backslash since it's a special character.
    process.stdout.write('\r\\   '); 
  }, 700);
  
  // ... fill in the rest yourself ... (space is 200ms)
    setTimeout(() => {
        process.stdout.write('\r|   ');
    }, 900);

    setTimeout(() => {
        process.stdout.write('\r/   ');
    }
    , 1100);
