function calculateBmi() {
    var weight = document.getElementById('weight').value;
    var height = document.getElementById('height').value;
    var result = weight / (height * height);
    alert(result) 
}
