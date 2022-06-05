function calculadora(){
    var operacao = prompt('Escola uma operacao:\n 1 - Soma (+)\n 2 - Subtracao (-)\n 3 - Multiplicacao (*)\n 4 - Divisao real (/) \n 5 - Divisao Inteira (%)\n 6 - Potenciacao (**)  ');
}
let n1 = prompt('Insira o primeiro valor')
let n2 = prompt('Insira o segundo valor')
let resultado;

function soma (){
    resultado = n1 + n2
    alert(`${n1} + ${n2}  = ${resultado}`)
}

    if(operacao ==1) {
        soma();
    } else if (operacao == 2){
        subtracao();
    } else if ( operacao == 3){
        multiplicacao();
    } else if (operacao == 4) {
        divisaoReal();
    } else if (operacao == 5){
        divisaoInterira();
    } else if (operacao == 6){
        potenciacao();
    }


calculadora()