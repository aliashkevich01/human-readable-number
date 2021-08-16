let strOnes=['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
let fromTenToTwenty=['ten','eleven','twelve','thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
let strTens=['','','twenty', 'thirty','forty','fifty','sixty','seventy','eighty','ninety'];
module.exports = function toReadable (number) {
 
 if(number===0) {return 'zero';}
 else{

    if(number>99){
        if(number%100==0){
            return strOnes[Math.floor(number/100)] +` hundred`;
        }
        else{
            return strOnes[Math.floor(number/100)] +` hundred `+readableTens(number%100);
        }
    }
    else return readableTens(number);

 }
}

function readableTens(otherNum){
    if(otherNum<=9){
        return strOnes[otherNum];
    }
    else if(otherNum>=10 && otherNum<=19){
        return fromTenToTwenty[otherNum-10];
    }
    else{
        if(otherNum%10===0){
            return `${strTens[Math.floor(otherNum/10)]}`;
        }
        else{
            return strTens[Math.floor(otherNum/10)] + ' ' + strOnes[otherNum%10];
        }
    }
}
