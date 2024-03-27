import inquirer from "inquirer";
let ourBalance = 10000;
let ourPinCode = 2345;
let atmAnswer = await inquirer.prompt([
    {name:'pinCode',message:'Enter Your Pin',type:'number'}
]);
if(atmAnswer.pinCode === ourPinCode){
    console.log('Correct Pin Code');
    let atmOperations = await inquirer.prompt([
        {name:'operations',message:'Please select only one option',type:'list',choices:['withdraw','checkbalance']}
    ]);
    // console.log(atmOperations)
    if(atmOperations.operations === 'withdraw'){
        let atmWithdraw = await inquirer.prompt([
            {name:'withdraw',message:'Enter Your Amount',type:'number'}
        ]);
       if(atmWithdraw.withdraw > ourBalance){
        console.log(`Sir, Your Amount only is ${ourBalance} not ${atmWithdraw.withdraw}`);
       }else{
        ourBalance -= atmWithdraw.withdraw;
        console.log(`Your Remaining Balance is : ${ourBalance}`);
       }
    }else if(atmOperations.operations === 'checkbalance'){
        console.log(`Your Balance is : ${ourBalance}`)
    }
}else{
    console.log(`Invalid Pin code`);
}