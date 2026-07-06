<<<<<<< HEAD
document.getElementById('btnConvertir').addEventListener('click', function() {
const campoCelsius = document.getElementById('celsius').value;
const campoFahrenheit = document.getElementById('fahrenheit');
if (campoCelsius === "" || isNaN(campoCelsius)) {
alert("El campo de celcius no puede quedar vacio");
campoFahrenheit.value = "";
return;
}
const celsius = parseFloat(campoCelsius);
const fahrenheit = (celsius * 9 / 5) + 32;
campoFahrenheit.value = fahrenheit.toFixed(1) + " °F";
=======
document.getElementById('btnConvertir').addEventListener('click', function() {
const campoCelsius = document.getElementById('celsius').value;
const campoFahrenheit = document.getElementById('fahrenheit');
if (campoCelsius === "" || isNaN(campoCelsius)) {
alert("El campo de celcius no puede quedar vacio");
campoFahrenheit.value = "";
return;
}
const celsius = parseFloat(campoCelsius);
const fahrenheit = (celsius * 9 / 5) + 32;
campoFahrenheit.value = fahrenheit.toFixed(1) + " °F";
>>>>>>> 2adf3ca3ccf5fd5c066617db3df2d0676f4a15c6
});