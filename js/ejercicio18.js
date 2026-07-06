<<<<<<< HEAD
const input=document.getElementById('nuevoElemento');
const botonAgregar=document.getElementById('agregarBtn');
const lista=document.getElementById('lista');
function agregarElemento(){
const texto=input.value.trim();
if(texto!==''){
const li=document.createElement('li');
li.className='list-group-item d-flex justify-content-between align-items-center elemento mb-2 shadow-sm rounded';
const textoNodo=document.createTextNode(texto);
li.appendChild(textoNodo);
const botonEliminar=document.createElement('button');
botonEliminar.className='btn btn-danger btn-sm';
botonEliminar.textContent='Eliminar';
botonEliminar.addEventListener('click',function(){
li.remove();
});
li.appendChild(botonEliminar);
lista.appendChild(li);
input.value='';
}else{
alert('Escribe algo para agregar a la lista.');
}
}
=======
const input=document.getElementById('nuevoElemento');
const botonAgregar=document.getElementById('agregarBtn');
const lista=document.getElementById('lista');
function agregarElemento(){
const texto=input.value.trim();
if(texto!==''){
const li=document.createElement('li');
li.className='list-group-item d-flex justify-content-between align-items-center elemento mb-2 shadow-sm rounded';
const textoNodo=document.createTextNode(texto);
li.appendChild(textoNodo);
const botonEliminar=document.createElement('button');
botonEliminar.className='btn btn-danger btn-sm';
botonEliminar.textContent='Eliminar';
botonEliminar.addEventListener('click',function(){
li.remove();
});
li.appendChild(botonEliminar);
lista.appendChild(li);
input.value='';
}else{
alert('Escribe algo para agregar a la lista.');
}
}
>>>>>>> 2adf3ca3ccf5fd5c066617db3df2d0676f4a15c6
botonAgregar.addEventListener('click',agregarElemento);