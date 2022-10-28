function perfectos(){
    let i = 1;
    let e =1;
    let cant = parseInt(document.getElementById("cant").value);
    let imprimir = document.getElementById("imprimir");
    imprimir.innerHTML = "";
    let divisores = 0;
    while(e<=cant){
        for(let n = 1; n<i;n++){
            if(i % n == 0){
                divisores += n;
            }
        }
        if(divisores == i){
            imprimir.innerHTML += i + "<br>";
            e++
        }
        divisores=0
      i++
    }
}