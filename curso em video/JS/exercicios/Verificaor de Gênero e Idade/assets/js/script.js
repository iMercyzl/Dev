function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.querySelector('input#txtano')
    var res = document.querySelector('div#res')
    if (fano.value.lenght == 0 || fano.value > ano){
        window.alert('Verifique e tente novamente!')
    } else {
        
        var fsex = window.document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        //res.innerHTML = `Idade Calculada: ${idade}`
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        if (fsex[0].checked) {
            genero = 'homi'
            if (idade >=0 && idade <12) {
                //CRIANÇA
                img.setAttribute('src', 'assets/imagens/homemcriança.png')
                //res.innerHTML = `É um ${genero}, com ${idade}`

            } else if (idade <22){
                //ADOLESCENTE
                img.setAttribute('src', 'assets/imagens/homemadolescente.png')

            } else if (idade <65){
                //ADULTO
                img.setAttribute('src', 'assets/imagens/homemadulto.png')
            } else {
                //VELHO
                img.setAttribute('src','assets/imagens/homemvelho.png')
            }
        } else if (fsex[1].checked) {
            genero = 'muié'
            if (idade >=0 && idade <12) {
                //CRIANÇA
                //res.innerHTML = `É um ${genero}, com ${idade}`
                img.setAttribute('src','assets/imagens/mulhercriança.png')

            } else if (idade <22){
                //ADOLESCENTE
                img.setAttribute('src','assets/imagens/mulheradolescente.png')

            } else if (idade <65){
                //ADULTO
                img.setAttribute('src','assets/imagens/mulheradulta.png')
            } else {
                //VELHO
                img.setAttribute('src','assets/imagens/mulhervelha.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `<p>é ${genero} com ${idade} anos.</p>`
        res.appendChild(img)
        
    }

}