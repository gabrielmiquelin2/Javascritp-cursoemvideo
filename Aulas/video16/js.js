function parinpar(num){
   if(num % 2 == 0){
    return "PAR"
   }else{
    return"ÍNPAR"
   }
}

console.log(parinpar(4)) 



function soma (n1=0, n2=0){//se não preencher com os numero vai ser igual a ZERO 0
  return n1 + n2
}
console.log(soma(2,5))



let v = function (x){
       return x * 2
}

console.log(v(5))


// FATORIAL DE UM NÚMERO
function fatorial (n){
    let fat = 1
      for (let c = n; c > 1;c --){
        fat *=c
      }
      return fat
}

console.log(fatorial(5))

//OUTRA MANEIRA DE ACHAR O FATORIAL
function fatorial (n){
   if (n == 1){
    return 1
   }else{
    return n * fatorial(n-1)
   }
}

console.log(fatorial(10))