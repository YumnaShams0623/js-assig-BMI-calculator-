
// function calculateBMI() {
    
//     var height = document.getElementById("height").value;
//     var weight = document.getElementById("weight").value;
//     var bmi = weight / (height * height);
//     var result = document.getElementById("result");
//     result.innerHTML = "Your BMI is " + bmi.toFixed(2);
//     var category;
//     if(bmi<18.5) {;
//         category = 'Under Weight🙂';
//     }else if (bmi<25) {
//         category = 'Normal Weight😊';
//     }else if (bmi<30) {
//         category = 'Over Weight😞';
//     }else{
//         category = "Obesity🤐"
//     }
//     result.innerHTML+= " <br> Your Category is:" +category;
// }

function calculateBMI() {
    var height = document.getElementById("height").value;
    var weight = document.getElementById("weight").value;
    var bmi = weight / (height * height);
    var category;
    var backgroundColor;
  
    if (bmi < 18.5) {
      category = "Underweight 🟢";
      backgroundColor = "#C6F4D6";
    } else if (bmi < 25) {
      category = "Normal Weight 👍";
      backgroundColor = "#32CD32"; 
    } else if (bmi < 30) {
      category = "Overweight⚠️";
      backgroundColor = "#ffa703"; 
    } else if (bmi > 30){
      category = "Obese 🙆‍♂️🤐";
      backgroundColor = "#ff2424"; 
    }else {
        category = "Enter a valid Weight & Height !"
 
    }

  
    document.getElementById("result").innerHTML = `Your BMI is ${bmi.toFixed(1)} (${category})`;
    document.getElementById("result").style.backgroundColor = backgroundColor;
    document.getElementById("result").style.color = "black";
    document.getElementById("result").style.padding = "10px";
    document.getElementById("result").style.borderRadius = "5px";
    document.getElementById("result").style.width = "50px;"
}
  
  










