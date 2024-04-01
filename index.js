#!  /usr/bin/env node
import inquirer from "inquirer";
let ourBalance = 0;
let atmAnswer = await inquirer.prompt([
    {
        name: "pinCode",
        message: "Select Only One Pin",
        type: "list",
        choices: [2345, 5643, 8949, 4587],
    },
]);
// Add Each Code Amount 
if (atmAnswer.pinCode === 2345) {
    ourBalance += 10000;
}
else if (atmAnswer.pinCode === 5643) {
    ourBalance += 15000;
}
else if (atmAnswer.pinCode === 8949) {
    ourBalance += 30000;
}
else if (atmAnswer.pinCode === 4587) {
    ourBalance += 35000;
}
if (atmAnswer.pinCode) {
    console.log("Correct Pin Code");
    let atmOperations = await inquirer.prompt([
        {
            name: "operations",
            message: "Please select only one option",
            type: "list",
            choices: ["withdraw", "fastcash", "checkbalance"],
        },
    ]);
    // With Draw Amount
    if (atmOperations.operations === "withdraw") {
        let atmWithdraw = await inquirer.prompt([
            {
                name: "withdraw",
                message: "Please Enter Your Amount",
                type: "number",
            },
        ]);
        if (atmWithdraw.withdraw > ourBalance) {
            console.log(`Sir, Your Balance only is ${ourBalance}, so you can not withdraw ${atmWithdraw.withdraw}`);
        }
        else {
            ourBalance -= atmWithdraw.withdraw;
            console.log(`Your Remaining Balance is : ${ourBalance}`);
        }
    }
    // Fast Cash Amount
    else if (atmOperations.operations === "fastcash") {
        let atmWithdraw = await inquirer.prompt([
            {
                name: "fastcash",
                message: "Please select any one",
                type: "list",
                choices: [
                    500, 1000, 1500, 5000, 10000, 15000, 20000, 25000, 32000, 40000,
                ],
            },
        ]);
        if (atmWithdraw.fastcash > ourBalance) {
            console.log(`Sir, Your Balance only is ${ourBalance}, so you can not withdraw ${atmWithdraw.fastcash}`);
        }
        else {
            ourBalance -= atmWithdraw.fastcash;
            console.log(`Your Remaining Balance is : ${ourBalance}`);
        }
    }
    // Check Amount
    else if (atmOperations.operations === "checkbalance") {
        console.log(`Your Balance is : ${ourBalance}`);
    }
}
else {
    console.log(`Invalid Pin code`);
}
