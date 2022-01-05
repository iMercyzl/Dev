function carregar () {
    var msg = window.document.querySelector('div#msg')
    var bdtn = window.document.querySelector('div#bdtn')
    var img = window.document.querySelector('img#imagem')
    var data = new Date()
    var hora = data.getHours()
    var min = data.getMinutes()

    //var hora = 13
    //bdtn.innerHTML = `Agora são ${hora}:${min}.`
    if(hora >=6 && hora <12) {
        msg.innerHTML = 'BOM DIA!'
        bdtn.innerHTML = `Agora são ${hora}:${min}.`
        img.src = 'dia.png'
        document.body.style.background = '#cfe0e7'
    } else if(hora >=12 && hora <18) {
        msg.innerHTML = 'BOA TARDE!'
        bdtn.innerHTML = `Agora são ${hora}:${min}.`
        img.src = 'tarde.png'
        document.body.style.background = '#e2a657'
    } else {
        msg.innerHTML = '<p>BOA NOITE!</p>'
        bdtn.innerHTML = `<p>Agora são ${hora}:${min}.</p>`
        img.src = 'noite.png'
        document.body.style.background = '#584264'
        //document.
    }
}
