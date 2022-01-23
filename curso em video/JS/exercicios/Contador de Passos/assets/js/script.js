
function contar() {
    var inicio = document.getElementById('txti')
    var passo = document.getElementById('txtp')
    var fim = document.getElementById('txtf')
    var res = document.getElementById('res')

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        window.alert ('[ERRO] faltam dados')
    } else{
        res.innerHTML ='contando: <br>'
        var i = Number(inicio.value)
        var p = Number(passo.value)
        var f = Number(fim.value)
        if (p <= 0) {
            //transformando o passo 0 em passo 1 para não dar erro
            window.alert('Passo Invalido! Considerando PASSO 1')
            p = 1
        }
        if (i < f) {
            //contagem crescente
            for (var c = i; c <= f; c += p) {
                res.innerHTML += `${c} \u{1F449}`
            }
        } else {
            //contagem regressiva
            for (var c = i; c >= f; c -= p)
                res.innerHTML += `${c} \u{1F449}`
        }
        
    }
    res.innerHTML += `\u{1F3C1}`
}