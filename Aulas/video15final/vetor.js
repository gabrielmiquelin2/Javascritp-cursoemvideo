let valores = [8,1,7,4,2,9]
valores.sort()
// for( let pos = 0; pos < valores.length; pos++){
//   console.log(`A posição ${pos} tém o valor ${valores[pos]}`)
// }

//FOR MAIS SIMPLIFICADO AINDA
for(let pos in valores){//Para cada posição em "valores"(na variável composta) vou mostrar o "valores[pos]"
  console.log(`A posição ${pos} tém o valor ${valores[pos]}`)
}