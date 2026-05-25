function calculate() {
    var nom = document.getElementById("name").value;
    var weight = parseFloat(document.getElementById("weight").value);
    var height = parseFloat(document.getElementById("height").value);

    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
        alert("Please enter valid positive values for weight and height!");
        return;
    }

    height = height / 100;

    var imc = weight / (height * height);

    document.getElementById("result").innerHTML =
        "Bonjour " + nom + "<br>" +
        "Votre IMC est: " + imc.toFixed(2);

       messageIMC(imc);
}

function messageIMC(imc) {
    var MSG = "";

    if (imc < 18.5) {
        MSG = "Vous êtes en sous-poids.";
    } else if (imc < 25) {
        MSG = "Vous avez un poids normal.";
    } else if (imc < 30) {
        MSG = "Vous êtes en surpoids.";
    } else {
        MSG = "Vous êtes obèse.";
    }

    document.getElementById("message").innerText = MSG;
}