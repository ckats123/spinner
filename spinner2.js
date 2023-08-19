/*
Refactor the logic to remove the repeated setTimeout statements.
We should instead be left with much less code (about 8 to 10 lines of code).
*/

process.stdout.write('hello from spinner1.js... \rheyyy\n');

const spinner = function() {
    let delay = 100;
    let spinner = ['|', '/', '-', '\\', '|', '/', '-', '\\', '|']; //array of characters
    for (let i = 0; i < spinner.length; i++) {
        setTimeout(() => {
            process.stdout.write('\r' + spinner[i] + '   ');
        }, delay);
        delay += 200;
    }
};

spinner();


