
var nombre="Luis Alfredo";
var apellido="Jaramillo Uday";

var materias= ['Ingenieria web','Inteligencia Artificial Avnzada',
'Sistemas basados en conocimiento','Gestion productiva 3.2','Cambio Climatico'
,'Responsabilidad Social','DesarrilloIII'];
var nombrescompletos= nombre+" "+apellido;

var notas= [38,35,32,39,40,37,36];

var datos= document.getElementById("contenidos");
var datos1= document.getElementById("contenidos1");

datos.innerHTML=`
<h2> Nombre del Alumno: ${nombre} ${apellido}</h2>`;
datos.innerHTML+="Lista de Componete  "
for (let x = 0; x < notas.length; x++) {
    datos.innerHTML+="<ul><li>"+materias[x];
    
}
datos.innerHTML+="<br>Las notas durante los dos bimestre del ciclo Fueron:  "
for (let i = 0; i < notas.length; i++) {
    var aux=28;
    if (notas[i]>aux) {
        datos.innerHTML+="<ul><li>"+"Usted ha aprobado el componente de "+materias[i] + " con una nota de: "+notas[i]+"</li></ul>";
    }else{
        datos.innerHTML+="<ul><li>"+"Usted ha reprobado el componente de "+materias[i] +"fue reprobado con una nota de: "+notas[i]+"</li></ul>";
   
    }
    
}
datos1.innerHTML+=" <br>Promedio "
var auxi=0;
   

for (let index = 0; index < notas.length; index++) {
    auxi+=notas[index];     
}
var promedio=auxi/notas.length;
function imprimir() {
    
        if (promedio>=32) {
            datos1.innerHTML+=" <br>Muchas felicidades su promedio es de: "+promedio+" puede proceder ha solicitar o renovar una beca estudiantil";
        }else{
            datos1.innerHTML+=" <br>Lo sentimos su promedio es de: "+promedio+" por lo tanto no puede solicitar o renovar una beca estudiantil";
        }
  
}
imprimir();



