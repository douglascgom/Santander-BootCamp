//Tipos Primitivos de Variaveis 

//boolean
 var vOuf = false;
 console.log(typeof(vOuf));

 // number

 var numero = 1
 console.log(typeof(numero))

 //string

 var nome = ('Douglas')
 console.log(typeof(nome))

 //function

 var funcao = function() {}
 console.log(typeof(funcao));


 //Como declarar uma viariavel

 var variavel1 = 'douglas'
 console.log(variavel1)

 let variavel2 = 'correa'
 console.log(variavel2)

 const variavel3 = 'gomes'
 console.log(variavel3)

 var escopoGlobal = 'global';
console.log(escopoGlobal);

function escopoLocal(){
    let escopoLocalInterno = 'local';
    console.log(escopoLocalInterno);
}

escopoLocal();
