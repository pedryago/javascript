function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    //var hora = data.getHours()
    var hora = 11
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12){
        img.src = 'ex014/imagens/manha-pq.png'
        document.body.style.background = '#BBE3FD'
    } else if (hora >= 12 && hora < 18){
        img.src = 'ex014/imagens/tarde-pq.png'
        document.body.style.background = '#EA903A'
    } else {
        img.src = 'ex014/imagens/noite-pq.png'
        document.body.style.background = '#011142'
    }
}

