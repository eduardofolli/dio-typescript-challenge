// doing some tests using functions of an ecmascript newer then target tsconfig.json
// included specified libs on tsconfig 
// "lib": ["es2016", "DOM"],   
// strict null checks can be desactivated
let buttonTeste = document.getElementById('button');

function somarImplicito(p1, p2) {
    return p1
}

buttonTeste.addEventListener('click', () => {
    console.log('funcionou!');
});