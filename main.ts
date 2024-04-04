import inquirer from "inquirer";

interface ansType{
    userId : string,
    userPin : number,
    accountType : string,
    transactionType : string,
    amount : number,
}

const answer :ansType = await inquirer.prompt([
    {
        type : "input",
        name : "userId",
        message : "kindly enter your Id: "
    },
    {
        type : "number",
        name : "userPin",
        message : "kindly enter your Pin: "
    },
    {
        type : "list",
        name : "accountType",
        choices : ["Current" , "Savings"],
        message : "kindly enter your account type: "
    },
    {
        type : "list",
        name : "transactionType",
        choices : ["FastCash" , "withdraw"],
        message : "Select your transaction type: ",
        when(answer){
            return answer.accountType
        }
    },
        {
            type : "list",
            name : "amount",
            choices : [1000,2000,5000,10000],
            message : "Select your amount: ",
            when(answer){
                return answer.transactionType=="FastCash"
            },
    },        {
        type : "number",
        name : "amount",
        message : "Enter your amount: ",
        when(answer){
            return answer.transactionType=="withdraw"
        }
    },
])
if(answer.userId && answer.userPin){
    const balance = Math.floor(Math.random()*1000000)
    console.log(balance)
    const EnteredAmount = answer.amount;
    if(balance >= EnteredAmount){
       const remaining =  balance - EnteredAmount;
       console.log("Your remaining balance is " , remaining)
    }else{
        console.log("Insufficient Amount")
    }   
}

