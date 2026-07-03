let estudiantes = [];
document.getElementById('btnAgregar').addEventListener('click', function() {
const campoNombre = document.getElementById('nombreEstudiante');
const campoCalificacion = document.getElementById('calificacionEstudiante');
const nombre = campoNombre.value.trim();
const califTexto = campoCalificacion.value.trim();
if (nombre === "" || califTexto === "") {
alert("Los campos no pueden quedar vacios");
return;
}
const calificacion = parseFloat(califTexto);
if (isNaN(calificacion)) {
alert("Por favor ingresa una calificacion valida");
return;
}
if (calificacion < 0) {
alert("No puedes ingresar cantidades negativas papu");
return;
}
estudiantes.push({ nombre: nombre, calificacion: calificacion });
alert("Estudiante agregado correctamente");
campoNombre.value = "";
campoCalificacion.value = "";
});
document.getElementById('btnCalcular').addEventListener('click', function() {
const campoPromedio = document.getElementById('promedioGral');
const campoMax = document.getElementById('estMax');
const campoMin = document.getElementById('estMin');
if (estudiantes.length === 0) {
alert("Debes agregar al menos un estudiante papu");
campoPromedio.value = "";
campoMax.value = "";
campoMin.value = "";
return;
}
const promedio = estudiantes.reduce((total, estudiante) => total + estudiante.calificacion, 0) / estudiantes.length;
const calificacionMaxima = Math.max(...estudiantes.map(e => e.calificacion));
const calificacionMinima = Math.min(...estudiantes.map(e => e.calificacion));
const estudianteMax = estudiantes.find(e => e.calificacion === calificacionMaxima);
const estudianteMin = estudiantes.find(e => e.calificacion === calificacionMinima);
campoPromedio.value = promedio % 1 === 0 ? promedio : promedio.toFixed(2);
campoMax.value = estudianteMax.nombre;
campoMin.value = estudianteMin.nombre;
});