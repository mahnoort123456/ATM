import inquirer from "inquirer";
let myBalance = 10000; // Dollar
let myPin = 2914; 

const pinAnswer = await inquirer.prompt([
    {
        name: "PIN",
        message: "Enter your PIN",
        type: "number"
    }
]);
if(pinAnswer.PIN === myPin){
    console.log("Correct PIN code!!!");
    let operationAns = await inquirer.prompt(
        [
            {
                name: "operation",
                message: "please! select option",
                type: "list",
                choice: ["withDraw" , "checkBalance"]
            }
        ]
    );
console.log(operationAns)
    if (operationAns.operation === "withDraw"){
        let amountAns = await inquirer.prompt(
            [
                {
                    name: "amount",
                    message: "Enter your amount",
                    type: "number"
                }
            ]
        );
         myBalance -= amountAns.amount

        console.log("Your remaining balance is :" + myBalance);
    }else if (operationAns.operation === "checkBalance"){
        console.log("Your balance is" + myBalance)
    }

}else{
    console.log("Incorrect PIN code !!!");
}
