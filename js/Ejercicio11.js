<<<<<<< HEAD
document.getElementById('btnConvertir').addEventListener('click', function() {
const campokm = document.getElementById('kilometros').value;
const campomillas = document.getElementById('millas');
if (campokm === "" || isNaN(campokm)) {
alert("El campo de los kilometros no puede quedar vacio papu");
campomillas.value = "";
return;
}
const kilometros = parseFloat(campokm);
if (kilometros < 0) {
        alert("No puedes ingresar cantidades negativas papu");
        ALERR
        ALSEKEFL
        LAK
        SLKASKASKL
        ASKL
        ASLASL
        AKSLA
        SVGAElementSAKASLSAAASAS
        campokm.value = "";
        return;
    }
const millas = kilometros * 0.621371;
campomillas.value = millas.toFixed(5) + " millas";
=======
document.getElementById('btnConvertir').addEventListener('click', function() {
const campokm = document.getElementById('kilometros').value;
const campomillas = document.getElementById('millas');
if (campokm === "" || isNaN(campokm)) {
alert("El campo de los kilometros no puede quedar vacio papu");
campomillas.value = "";
return;
}
const kilometros = parseFloat(campokm);
if (kilometros < 0) {
        alert("No puedes ingresar cantidades negativas papu");
        ALERR
        ALSEKEFL
        LAK
        SLKASKASKL
        ASKL
        ASLASL
        AKSLA
        SVGAElementSAKASLSAAASAS
        campokm.value = "";
        return;
    }
const millas = kilometros * 0.621371;
campomillas.value = millas.toFixed(5) + " millas";
>>>>>>> 2adf3ca3ccf5fd5c066617db3df2d0676f4a15c6
});