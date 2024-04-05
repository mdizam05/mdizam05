import inquirer from "inquirer";
let convertion = {
    "PKR": {
        "USD": 0.0036,
        "GBP": 0.0029,
        "PKR": 1,
        "CAD": 0.0049,
        "JPY": 0.55,
        "EUR": 0.0033,
        "AUD": 0.0055,
        "CHF": 0.0033,
        "HKD": 0.028,
        "NZD": 0.0060
    },
    "USD": {
        "USD": 1,
        "GBP": 0.79,
        "PKR": 277.92,
        "CAD": 1.36,
        "JPY": 151.67,
        "EUR": 0.93,
        "AUD": 1.52,
        "CHF": 0.91,
        "HKD": 7.83,
        "NZD": 1.67
    },
    "GBP": {
        "USD": 1.26,
        "GBP": 1,
        "PKR": 349.91,
        "CAD": 1.72,
        "JPY": 190.88,
        "EUR": 1.17,
        "AUD": 1.92,
        "CHF": 1.14,
        "HKD": 9.85,
        "NZD": 2.10
    },
    "CAD": {
        "USD": 0.73,
        "GBP": 0.58,
        "PKR": 203.67,
        "CAD": 1,
        "JPY": 111.15,
        "EUR": 0.68,
        "AUD": 1.12,
        "CHF": 0.66,
        "HKD": 5.74,
        "NZD": 1.22
    },
    "JPY": {
        "USD": 0.0066,
        "GBP": 0.0052,
        "PKR": 1.83,
        "CAD": 0.0090,
        "JPY": 1,
        "EUR": 0.0061,
        "AUD": 0.010,
        "CHF": 0.0060,
        "HKD": 0.052,
        "NZD": 0.011
    },
    "EUR": {
        "USD": 1.08,
        "GBP": 0.86,
        "PKR": 300.21,
        "CAD": 1.47,
        "JPY": 163.77,
        "EUR": 1,
        "AUD": 1.65,
        "CHF": 0.98,
        "HKD": 8.46,
        "NZD": 1.80
    },
    "AUD": {
        "USD": 0.66,
        "GBP": 0.52,
        "PKR": 182.46,
        "CAD": 0.90,
        "JPY": 99.53,
        "EUR": 0.61,
        "AUD": 1,
        "CHF": 0.59,
        "HKD": 5.14,
        "NZD": 1.09
    },
    "CHF": {
        "USD": 1.10,
        "GBP": 0.88,
        "PKR": 308.09,
        "CAD": 1.51,
        "JPY": 167.54,
        "EUR": 1.02,
        "AUD": 1.68,
        "CHF": 1,
        "HKD": 8.65,
        "NZD": 1.84
    },
    "HKD": {
        "USD": 0.13,
        "GBP": 0.10,
        "PKR": 35.50,
        "CAD": 0.17,
        "JPY": 19.37,
        "EUR": 0.12,
        "AUD": 0.19,
        "CHF": 0.12,
        "HKD": 1,
        "NZD": 0.21
    },
    "NZD": {
        "USD": 0.60,
        "GBP": 0.48,
        "PKR": 166.58,
        "CAD": 0.82,
        "JPY": 90.86,
        "EUR": 0.55,
        "AUD": 0.91,
        "CHF": 0.54,
        "HKD": 4.69,
        "NZD": 1
    },
};
const answer = await inquirer.prompt([
    {
        type: "list",
        name: "from",
        choices: ["PKR", "USD", "GBP", "CAD", "JPY", "EUR", "AUD", "CHF", "HKD", "NZD"],
        message: "Select your currency: ",
    },
    {
        type: "list",
        name: "to",
        choices: ["PKR", "USD", "GBP", "CAD", "JPY", "EUR", "AUD", "CHF", "HKD", "NZD"],
        message: "Select your convertion currency: ",
    }, {
        type: "number",
        name: "amount",
        message: "Enter your convertion amount: ",
    },
]);
const { from, to, amount } = answer;
if (from && to && amount) {
    let result = convertion[from][to] * amount;
    console.log(`Yous convertion from ${from} to ${to} is: ${result} `);
}
else {
    console.log("Invalid input. ");
}
