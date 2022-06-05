//Manipulando vetores ou arrays

/*
var possibilidade = ['Douglas', 30, 'M','Timoteo', 'Solteiro']
console.log(possibilidade)
*/



var possibilidade = ['Douglas', 30, 'M','Timoteo', 'Solteiro']
console.log(possibilidade[2])

//forEach

//possibilidade.forEach(function(item, index){console.log(item, index)});

//possibilidade.push('Novo Item')
//console.log(possibilidade)

/*
possibilidade.pop()
console.log(possibilidade)
*/

/*
possibilidade.shift()
console.log(possibilidade)
*/

/*
possibilidade.unshift('Novo item')
console.log(possibilidade)
*/

/*
console.log(possibilidade.indexOf('Timoteo'))
*/

/*
possibilidade.splice(0, 2)
console.log(possibilidade)
*/

var object = {strong: 'strong', number : 1, boolean: true, arrray: ['array'], objectInterno: {objectInterno: 'objeto interno'}}
console.log(object.objectInterno)

var {string, boolean, objectInterno} = object
console.log(string, boolean, objectInterno)