
function calculateBMI() {
    
    var height = document.getElementById("height").value;
    var weight = document.getElementById("weight").value;
    var bmi = weight / (height * height);
    var result = document.getElementById("result");
    result.innerHTML = "Your BMI is " + bmi.toFixed(2);
}
