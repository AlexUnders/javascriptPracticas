function divisores(number){
    let total = 0;

    for(let i=1; i <=number; i++){
        if(number % i == 0){
            total++;
        }
    }
    return total;
}

const divisoresV2 = function(number){
    let total = 0;
    for(let i=1; i <=number; i++){
        if(number % i == 0){
            total++;
        }
    }
    return total;
    
}



const divisoresV3 = number => {
    let total = 0;
    for(let i=1; i <=number; i++){
        if(number % i == 0){
            total++;
        }
    }
    return total;
}
/* console.log(divisores(32));
console.log(divisoresV2(32));
console.log(divisoresV3(32)); */

function calcular(){
    /* console.log("Hola desde el botón"); */
    let number = parseInt(document.getElementById("number").value);
    let resultado = document.getElementById("resul");

    resultado.value = divisores(number);
   
    }

function imagen(){
    let option = parseInt(document.getElementById("num").value);
    let imga = document.getElementById("imagen");
    switch (option) {
        case 1:
            imga.src="Recursos/2x1.gif";
            break;
        case 2:
            imga.src="Terror/2x1.gif";
            break;
        case 3:
            imga.src="Viernes/2x1.gif";
            break;
        default:
            console.log("No hay más imágenes.")
            break;
}
}
