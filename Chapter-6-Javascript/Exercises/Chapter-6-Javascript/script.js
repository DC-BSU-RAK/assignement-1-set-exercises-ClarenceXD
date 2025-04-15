let price = 1.72;
let liters = 0;
//Equation
let cost = price * liters;

//parseFloat used to convert string to float
function updateliters(){
    liters = parseFloat(document.getElementById("liters").value);
}

//function will update the liters value and update the cost value
function calculator(){
    updateliters()
    let cost = price * liters;
    document.getElementById("price").innerHTML = cost;
    }