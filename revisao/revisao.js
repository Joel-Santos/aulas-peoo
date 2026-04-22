// Revisão de PEOO
//Declaração de variáveis
// Var -> Está descontinuada
var nome = "Joel Santos"; //tipo texto
// Let -> Está em uso atualmente (mais comum), pode ser reatribuida
let idade = 20;
idade = 50;
idade = "Cinquenta";
// const -> constante (variavel fixa)
const  cidade = "Ielmo";
//cidade = "Ielmo Marinho";
console.log(cidade);


//Manipulação e operações
// =  atribuição
// + soma, - subtração, * multiplicaçao, / divisao, % resto da divisão
let valor = 10;
valor = 10 + 10;
console.log(valor);
valor += 30; // valor = valor + 30
console.log(valor);
valor = 30*2;
console.log(valor)
valor = 30/2;
console.log(valor)
valor = 30%2;
console.log(valor)

// declare uma variavel chamada media que guarda a media de 3 notas;
let media = (10+5+6.5)/3;
console.log(media);
// template string (padronização da saída)
console.log(`A média das 3 notas é: ${media}`);

//Estrutas condicionais (simples ou compostas)
if(media>7){ //simples
    console.log("Aprovado!");
}

if(media>8){
    console.log("Aprovado!");
}else{
    console.log("Reprovado!");
}