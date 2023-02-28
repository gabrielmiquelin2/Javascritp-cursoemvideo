
// Definição de variáveis que serão trabalhadas

let num = document.querySelector('input#txtn')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = []

// A função isNumero confere se o número digitado está entre 1 e 100. Se estiver retorna true se não retorna false

function isNumero(n){
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }

}

// A função inLista confere se o número está ou não na lista, retornando true ou false

function inLista(n, l){
    if (l.indexOf(Number(n)) != -1){
        return true
    } else {
        return false
    }

}

//A função adicionar() confere se o valor digitado é um número válido E se esse valor não está na lista e é válido

function adicionar(){
    if (isNumero(num.value) && !inLista(num.value, valores)){
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = ` Valor ${num.value} adicionado`
        lista.appendChild(item)
        res.innerHTML = ''
        
    } else {
        alert('Valor inválido ou já inserido!')
    }
    num.value = '' // String vazia limpa a caixa do input
    num.focus() // .focus é um método que faz com que o curso volte a piscar dentro do input

}


//A função finalizar gera as variáveis e dados a serem trabalhados para exibição

function finalizar(){
    if(valores.length == 0) {
        alert('Adiciona valores para finalizar')
    } else {
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for(let pos in valores) {
            soma += valores[pos]
            if (valores[pos] > maior)
                maior = valores[pos]
            if (valores[pos] < menor)
                menor = valores[pos]
            
            
        }
        media = soma / tot

        res.innerHTML = ''
        res.innerHTML += `<p> Ao todo, temos ${tot} números cadastrados.</p>`
        res.innerHTML += `<p> O maior valor informado foi ${maior}</p>`
        res.innerHTML += `<p> O menor valor informado foi ${menor}</p>`
        res.innerHTML += `<p> Somando todos os valores temos ${soma}</p>`
        res.innerHTML += `<p> A média dos valores digitados foi ${media} </p>`
    }

}