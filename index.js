
function calculateTax(income, expenses) {

    if(income <=0 || expenses >income){
        return "Invalid Input"
    }

    let monthlyIncome = income;
    let monthlyExpense = expenses;
    let costDifferences = monthlyIncome - monthlyExpense;
    let tax = costDifferences * .20;

    return tax;
}



function sendNotification(email) {
    
    if(email.includes('@') === false){
        return "Invalid Email"
    }

    let separate = email.split("@");

    let user_name = separate[0];
    let domain_name = separate[1]
    let result = user_name + " sent you an email from " + domain_name;

    return result;
}

function checkDigitsInName(name) {
    
   if(typeof name !== 'string'){
    return "Invalid Input"
   }

    for (let i = 0; i < name.length; i++){
        if (!isNaN(name[i]) && name[i] !== 'string') { 
            return true;
        }
    }
        return false;
        
    
}




function calculateFinalScore(obj) {
    
    if(typeof obj !== 'object'){
        return "Invalid Input"
    }

    obj.testScore <=50;
    obj.schoolGrade <=50

    let finalScore = obj.testScore + obj.schoolGrade;

    if(typeof obj.name === 'string' && typeof obj.testScore === 'number' && typeof obj.schoolGrade === 'number' && obj.isFFamily === true && finalScore >= 60){
        return true;
    }

    return false;
}




function  waitingTime(waitingTimes, serialNumber) {
    
    if(!Array.isArray(waitingTimes) || typeof serialNumber !== 'number'){
        return "Invalid Input"
    }

    let serial = serialNumber - 1;

    let restWaitter = serial - waitingTimes.length;

    let sum = 0;

    for(const waitingTime of waitingTimes){

    sum = sum + Math.round(waitingTime / waitingTimes.length) * restWaitter;
    }
    
    return sum;
}

