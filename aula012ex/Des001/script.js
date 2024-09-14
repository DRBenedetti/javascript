function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    
    if (hora >= 6 && hora < 12) {
        //BOM DIA
        img.src = 'imagens/manha-250.png'
    }
    else if (hora >= 12 && hora < 19) {
        //BOA TARDE
        img.src = 'imagens/tarde-250.png'
        document.body.style.background = '#ff9c36'
    }
    else {
        //BOA NOITE
        img.src = 'imagens/noite-250.png'
        document.body.style.background = '#16002f'
        document.footer.style.color = 'fff'
    }
}

