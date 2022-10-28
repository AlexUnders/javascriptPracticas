function tabla(){
    let table = parseInt(document.getElementById("table").value);
    let type = document.getElementById("type").value;
    let long = document.getElementById("long").value;
    let imprimir = document.getElementById("imprimir");
    imprimir.innerHTML = "";
    let res = 0;
    switch (type) {
        case "+":
            for (let i = 1; i <= long; i++) {
                res = table*i;
                imprimir.innerHTML += table + "x"+ i + "=" + res+ "<br>";
            }
            break;
        case "-":
            for (let i = long; i>0; i--){
                res = table*i;
                imprimir.innerHTML += table + "x"+ i + "=" + res+ "<br>";
            }
            break;
        default:
            imprimir.innerHTML = "Valores Inválidos";
            break;
    }
}