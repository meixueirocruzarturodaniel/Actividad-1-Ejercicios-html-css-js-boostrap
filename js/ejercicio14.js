document.getElementById('btnCalcular').addEventListener('click', function() {
    const inputCadena = document.getElementById('cadenaNumeros').value.trim();
    const campoMayor = document.getElementById('numMayor');
    const campoMenor = document.getElementById('numMenor');
    const campoPromedio = document.getElementById('promedio');
    campoMayor.value = "";
    campoMenor.value = "";
    campoPromedio.value = "";
    if (inputCadena === "") {
        alert("El campo de números no puede quedar vacio");
        return;
    }
    const arregloCadenas = inputCadena.split(",");
    const numeros = arregloCadenas.map(num => Number(num.trim())); 
    const tieneErrores = numeros.some(num => isNaN(num) || num === 0 && inputCadena.includes(" ")); 
    if (tieneErrores) {
        alert("Por favor ingresa únicamente números válidos separados por comas papu");
        return;
    }
    const maximo = Math.max(...numeros);
    const minimo = Math.min(...numeros);
    const suma = numeros.reduce((acc, valor) => acc + valor, 0);
    const prom = suma / numeros.length;
    campoMayor.value = maximo;
    campoMenor.value = minimo;
    campoPromedio.value = prom % 1 === 0 ? prom : prom.toFixed(2); 
});