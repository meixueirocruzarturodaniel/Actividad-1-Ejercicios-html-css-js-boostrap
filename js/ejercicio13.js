<<<<<<< HEAD
document.getElementById('btnConvertir').addEventListener('click', function() {
    const campovo = document.getElementById('vota').value;
    const campopu = document.getElementById('SINO');
    if (campovo === "" || isNaN(campovo)) {
        alert("El campo de edad no puede quedar vacio");
        campopu.value = "";
        return;
    }
    const vota = parseFloat(campovo);
    if (vota < 0) {
        alert("No puedes ingresar cantidades negativas papu");
        campopu.value = "";
        return;
    }
    if (vota < 18) {
        campopu.value = "No puede votar";
    } else {
        campopu.value = "Puede votar";
    }
=======
document.getElementById('btnConvertir').addEventListener('click', function() {
    const campovo = document.getElementById('vota').value;
    const campopu = document.getElementById('SINO');
    if (campovo === "" || isNaN(campovo)) {
        alert("El campo de edad no puede quedar vacio");
        campopu.value = "";
        return;
    }
    const vota = parseFloat(campovo);
    if (vota < 0) {
        alert("No puedes ingresar cantidades negativas papu");
        campopu.value = "";
        return;
    }
    if (vota < 18) {
        campopu.value = "No puede votar";
    } else {
        campopu.value = "Puede votar";
    }
>>>>>>> 2adf3ca3ccf5fd5c066617db3df2d0676f4a15c6
});