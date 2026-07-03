function suma() {
var num1 = document.getElementById("num1").value;
var num2 = document.getElementById("num2").value;
var resultado = parseInt(num1) + parseInt(num2);
document.getElementById("resultado").innerHTML = resultado;
}

function multiplicar() {
var num3 = document.getElementById("num3").value;
var num4 = document.getElementById("num4").value;
var resultado1 = parseInt(num3) * parseInt(num4);
console.log('hola mundo');
document.getElementById("resultado1").innerHTML = resultado1;
}