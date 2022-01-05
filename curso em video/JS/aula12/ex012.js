var agora2 = new Date ()
var agora = new Date()
var hora = agora.getHours()
var min = agora2.getMinutes()

console.log (`agora são exatamente ${hora}:${min}.`)
if (hora <12) {
    console.log ('bom dia')
} else if (hora <18) {
    console.log ('boa tarde')
}else {
    console.log ('boa noite')
}