const sumar=(a,b)=>a+b;
const restar=(a,b)=>a-b;
const multiplicar=(a,b)=>a*b;
const dividir=(a,b)=>b!==0?a/b:'Error: División por cero';
const calcularOperacion=(operacion)=>{
const input1=document.getElementById('numero1').value;
const input2=document.getElementById('numero2').value;
const cajaResultado=document.getElementById('resultado');
if(input1.trim()===''||input2.trim()===''||isNaN(input1)||isNaN(input2)){
Swal.fire({
icon:'error',
title:'Valores inválidos',
text:'Por favor, ingrese únicamente números en ambos campos.',
confirmButtonColor:'#4c566a'
});
cajaResultado.value='';
return;
}
const a=parseFloat(input1);
const b=parseFloat(input2);
let resultadoFinal;
switch(operacion){
case 'suma':
resultadoFinal=sumar(a,b);
break;
case 'resta':
resultadoFinal=restar(a,b);
break;
case 'multiplicacion':
resultadoFinal=multiplicar(a,b);
break;
case 'division':
resultadoFinal=dividir(a,b);
if(resultadoFinal==='Error: División por cero'){
Swal.fire({
icon:'warning',
title:'Operación no válida',
text:resultadoFinal,
confirmButtonColor:'#bf616a'
});
cajaResultado.value='Error';
return;
}
break;
}
cajaResultado.value=resultadoFinal;
};