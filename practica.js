/* Practica */
let hora = 20;
let frecuencia = 6;
let cantidad = 24/frecuencia
for(let i=1; i <cantidad; i++){
    if(hora<24){
    console.log("Toma: "+i+"/ Hora: " + hora);
    hora = hora+frecuencia;
    }
}