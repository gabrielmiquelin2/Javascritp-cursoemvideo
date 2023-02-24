/*
Tanto o loop "while" quanto o "do-while" são usados ​​para repetir um bloco de código enquanto uma condição é verdadeira. No entanto, a principal diferença entre eles é que o "do-while" executa o bloco de código pelo menos uma vez, independentemente da condição ser verdadeira ou falsa, enquanto o "while" só executará o bloco de código se a condição for verdadeira.

Aqui está um exemplo de como cada um funciona:

Loop "while":

javascript
Copy code
while (condição) {
   //bloco de código
}
O bloco de código só será executado se a condição for verdadeira. Se a condição for falsa, o bloco de código será ignorado e o loop será encerrado.

Loop "do-while":

javascript
Copy code
do {
   //bloco de código
} while (condição);
O bloco de código será executado pelo menos uma vez, independentemente da condição ser verdadeira ou falsa. Depois de executar o bloco de código, a condição é verificada e, se for verdadeira, o bloco de código será executado novamente. O loop continuará até que a condição seja falsa.

Em resumo, a principal diferença entre os dois é que o "do-while" garante que o bloco de código seja executado pelo menos uma vez, enquanto o "while" não.
*/ 


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//TESTA PRIMEIRO EXECUTA DEPOIS
// let c = 1
// while (c - 5){
//   console.log(`paso ${c}`)
//   c = c + 1 //ou c++
// }

//Faça isso enquanto o contador foir menor que 5
let c = 1
do {
  console.log(`paso ${c}`)
  c = c + 1 //ou c++
}while (c - 5)