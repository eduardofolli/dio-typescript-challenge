function printValoresNumericos(n1: number, n2: number): void { // se declarar void o sistema impede de inserir um retorno indesejado/ por engano
    console.log(n1 + n2);
}

function somarValoresNumericosETratar(n1: number, 
                                n2: number,
                                callback: (n1: number) => number
                                ): number { // tipo de retorno
    let resultado =  n1 + n2;
    return callback(resultado);
}

function aoQuadrado(n: number): number {
    return n * n;
}

function dividirPorEleMesmo(n: number): number {
    return n / n;
}

printValoresNumericos(1, 43);

console.log(somarValoresNumericosETratar( 1, 3, aoQuadrado ))
console.log(somarValoresNumericosETratar( 1, 3, dividirPorEleMesmo ))