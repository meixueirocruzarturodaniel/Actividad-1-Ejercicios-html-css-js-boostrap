const manejarTareas=(function(){
const obtenerTareas=()=>{
const tareasStr=localStorage.getItem("tareas");
return tareasStr?JSON.parse(tareasStr):[];
};
const guardarTareas=(tareas)=>{
localStorage.setItem("tareas",JSON.stringify(tareas));
};
return{
agregar:(texto)=>{
const tareas=obtenerTareas();
tareas.push(texto);
guardarTareas(tareas);
renderizarTareas();
},
eliminar:(index)=>{
Swal.fire({
title:"¿Eliminar tarea?",
icon:"warning",
showCancelButton:true,
confirmButtonText:"Sí",
cancelButtonText:"No"
}).then((result)=>{
if(result.isConfirmed){
const tareas=obtenerTareas();
tareas.splice(index,1);
guardarTareas(tareas);
renderizarTareas();
}
});
},
obtener:obtenerTareas
};
})();
const renderizarTareas=()=>{
const lista=document.getElementById("listaTareas");
lista.innerHTML="";
const tareas=manejarTareas.obtener();
tareas.forEach((tarea,index)=>{
const li=document.createElement("li");
li.textContent=tarea;
const btnEliminar=document.createElement("button");
btnEliminar.textContent="Eliminar";
btnEliminar.onclick=()=>manejarTareas.eliminar(index);
li.appendChild(btnEliminar);
lista.appendChild(li);
});
};
document.getElementById("btnAgregar").onclick=()=>{
const input=document.getElementById("nuevaTarea");
if(input.value.trim()!==""){
manejarTareas.agregar(input.value.trim());
input.value="";
}
};
window.onload=renderizarTareas;