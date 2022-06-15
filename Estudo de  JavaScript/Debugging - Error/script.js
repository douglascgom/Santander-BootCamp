function validaArray(arr, num) {
    try{
        if(!arr && !num) throw new ReferenceError('Envie os parametros');

        if(typeof arr !== 'object') throw new TypeError('Array precisa ser do tipo object');

        if(typeof num !== 'number') throw new TypeError('Num precisa ser do tipo number');

        if(arr.length !== num) throw new RangeError('Tamanho invalido');
    
        return arr;
    }
    catch(e) {
        if(e instanceof ReferenceError) {
            console.log("Este error e um ReferenceError!")
            console.log(e.message)
        } else if (e instanceof TypeError) {
            console.log("Este error e  um TypeError!")
            console.log(e.message)
        } else if (e instanceof RangeError) {
            console.log("Este error e um RangeError!")
            console.log(e.message)
        } else {
            console.log("Tipe de error nao esperado:" + e)
        }
    }
}

console.log(validaArray([1, 2, 3, 4, 5], 5));