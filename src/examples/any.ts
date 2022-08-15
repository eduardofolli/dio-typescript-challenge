let valorAny: any; // espera qualquer tipo de dado

valorAny = 1; // number
valorAny = 'palavra' // string
valorAny = true // boolean

let valorString: string = 'teste';

// valorString = 3 - doesn't work because the type is string
valorString = valorAny; // lado negro do typescript - por poder se tornar string, quebra a tipagem do código

let valorString2: string = 'testao';

function somarString(s1: string, s2: string){
    console.log(s1 + s2);
}

somarString(valorString, valorString2);
somarString('ola, ', 'como vai?');