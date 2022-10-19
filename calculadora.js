function calculadora(){
    let num1 = parseInt(document.getElementById("num1").value);
    let num2 = parseInt(document.getElementById("num2").value);
    let op = document.getElementById("op").value;
    let res = document.getElementById("res");
    
    switch (op) {
        case '+':
            res.value = num1+num2;
            break;
        case '-':
            res.value = num1-num2;
            break;
        case '*':
            res.value = num1*num2;
            break;
        case '/':
            res.value = num1/num2;
            break;
        default:
            break;
    }
}