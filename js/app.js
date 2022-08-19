function getPin(){
    let pin = generatePin();
    let pinString = pin + "";
    
    if(pinString.length === 4){
        return pin;
    }
    else{
        return getPin()
    }

}

function generatePin(){
    let random = Math.round(Math.random() * 10000);
    return random
}

document.getElementById("generate-pin").addEventListener("click", function(){
    let getBtnPin = getPin()
    let displayPin = document.getElementById("display-pin")
    displayPin.value = getBtnPin
})

document.getElementById("calculator").addEventListener("click", function(event){
    let number = event.target.innerText;
    let typedNumber = document.getElementById("typed-numbers");
    let previouNumber = typedNumber.value;

    if(isNaN(number)){
        if(number === "C"){
            typedNumber.value = ""
        }
        else if(number === "<"){
            let digits = previouNumber.split("");
            digits.pop()
            let remainingDigits = digits.join("");
            typedNumber.value = remainingDigits
        }
    }
    else{
        let newNumber = previouNumber + number
        typedNumber.value = newNumber 
    }
})

document.getElementById("verify-pin").addEventListener("click", function(){
    //let matchPin = getPin();
    let displayPin = document.getElementById("display-pin")
    let typedNumber = document.getElementById("typed-numbers");
    let pinFailure = document.getElementById("pin-failure");
    let pinSuccess = document.getElementById("pin-success");

    if(displayPin.value === typedNumber.value){
        pinSuccess.style.display = "block";
        pinFailure.style.display = "none";
        displayPin.value ="";
    }
    else{
        pinFailure.style.display = "block";
        pinSuccess.style.display = "none";
        typedNumber.value = ""
    }

    typedNumber.value ="";
    
})