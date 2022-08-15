let anyEstaDeVolta: any;
anyEstaDeVolta = 3;
anyEstaDeVolta = '3';
anyEstaDeVolta = true;
anyEstaDeVolta = 5;

let testeString: string = 'verificar'

let unknowValor: unknown;
unknowValor = 3;
unknowValor = 'opa';
unknowValor = true;
unknowValor = 'vai sim';

let stringTest2: string = 'agora vai';
// stringTest2 = unknowValor;  - não funciona pois necessita validação para saber se realmente existe uma string dentro desta varivael

// unknow força a necessidade de validação para lidar com determinado tratamento
// para determinado tipo de variavel
if(typeof unknowValor === 'string'){
    stringTest2 = unknowValor; 
}


function jogaErro(erro: string, codigo: number): never { // código que nunca é finalizado
    throw {error: erro, code: codigo};
}

jogaErro('deu erro', 500)