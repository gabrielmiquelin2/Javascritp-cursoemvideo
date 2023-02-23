let agora = new Date()
let hora = agora.getHours()
console.log(`Agora são exatamente ${hora} horas.`)

if ( hora < 12){
  console.log("Boa noite")
}else if (hora <= 18){
  console.log("Boa tarde")
}else{
  console.log("Boa noite")
}

   