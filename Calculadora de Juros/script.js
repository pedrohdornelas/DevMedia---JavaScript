import entradaDados from 'readline-sync'

console.log("Aplicação de Juros:");

let divida = parseFloat(entradaDados.question("Informe o valor da dívida: "));
let atraso = parseInt(entradaDados.question("Informe quantos dias se passaram desde o vencimento do boleto: "));

console.log(`Valor original da dívida: ${divida}`);
console.log(`Dias atrasado: ${atraso}`);

let juros = 0;
let total = 0;

if (atraso > 15) {
    juros = 0.1;
    total = (0.1 * divida) + divida;
    console.log(`Taxa de juros: 10%`);
    console.log(`Valor total com Juros: R$ ${total.toFixed(2)}`);
} else {
    juros = 0.05;
    total = (0.05 * divida) + divida;
    console.log(`Taxa de juros: 5%`);
    console.log(`Valor total com Juros: R$ ${total.toFixed(2)}`);
}
