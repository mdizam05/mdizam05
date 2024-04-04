import inquirer from "inquirer";
let todos = [];
let loop = true;
while (loop) {
    const answer = await inquirer.prompt([
        {
            type: "input",
            name: "Todo",
            message: "what do you want to add in your todo? "
        },
        {
            type: "confirm",
            name: "addmore",
            message: "do you want to add more i your todo? ",
            default: false
        },
    ]);
    const { Todo, addmore } = answer;
    console.log(answer);
    loop = addmore;
    if (Todo) {
        todos.push(Todo);
    }
    else {
        console.log("Kindly add valid input: ");
    }
}
if (todos.length += 0) {
    console.log("Your todos list : ");
    todos.forEach(todo => {
        console.log(todos);
    });
}
else {
    console.log("no todos found");
}
;
