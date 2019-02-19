var baby = 0;

for (var ar = 2; ar < process.argv.length; ar++) {

    baby += Number(process.argv[ar]);
}

console.log(baby);
