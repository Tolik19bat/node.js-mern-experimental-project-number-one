import chalk from 'chalk';                                      


if(process.argv.length < 3) {
    console.log(chalk.red("Укажите величину в дюймах"));
    process.exit(1);
}
const name = process.argv[2];
const inches = parseFloat(process.argv[3]);
console.log(`Hello, name ${name}, inches ${inches}!`);

if (!inches || isNaN(inches)) {
    console.error(chalk.red("Укажите корректную величину в дюймах в виде числа"));
    process.exit(1);
}

const centimeters = inches * 2.54;
console.log(`${chalk.blue(inches)} дюймов = ${chalk.green(centimeters)} сантиметров`);
