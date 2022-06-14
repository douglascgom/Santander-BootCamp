function filtraPares(arr) {
    return arr.filter(callback);
}

function callback(item) {
    return item % 2 === 1;
}

const meuArray = [1, 33, 44, 58 ,45 ,52 ,141];

console.log(filtraPares(meuArray));