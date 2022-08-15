type input = number | string // criar tipos de variaveis, para identificar quais tipos uma variavel pode ser

function somarValores(i1: input, i2: input){
    if(typeof i1 === 'string' || typeof i2 === 'string'){
        return i1.toString() + i2.toString();
    } else {
        return i1 + i2;
    }
}

console.log(somarValores(1, 5));
console.log(somarValores('Ola', ', tudo bem?'));
console.log(somarValores('1', 5));
