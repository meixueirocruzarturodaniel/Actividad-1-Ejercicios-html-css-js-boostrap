document.getElementById('btnConvertir').addEventListener('click', function() {
const campope = document.getElementById('pesos').value;
const campodo = document.getElementById('dolar');
if (campope === "" || isNaN(campope)) {
alert("La cantidad en el campo de pesos no puede quedar vacio");
campodo.value = "";
return;
}
const pesos = parseFloat(campope);
if (pesos < 0) {
        alert("No puedes ingresar cantidades negativas papu");
        campodo.value = "";
        return;
    }
const dolar = pesos * 0.055;
campodo.value = dolar.toFixed(2) + " dolares";
});

