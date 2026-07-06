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
});