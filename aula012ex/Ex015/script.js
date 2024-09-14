function verificar() {
    var dia = new Date()
    var ano = dia.getFullYear()
    var nasc = document.getElementById('idade')
    var res = document.getElementById('resposta')
    //resposta.innerHTML = `Resposta: ${calc}`

    if (nasc.value.length == 0 || nasc.value > ano) {
        window.alert('Verifique os dados e tente novamente. ')
    } else {
        var sex = document.getElementsByName('isexo')
        var idade = ano - Number(nasc.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (sex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                //Criança
                img.setAttribute('src', 'imagens/bebe-masc-250.png')
            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src', 'imagens/jovem-masc-250.png')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'imagens/adulto-masc-250.png')
            } else {
                //Idoso
                img.setAttribute('src', 'imagens/idoso-masc-250.png')
            }
        } else {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                //Criança
                img.setAttribute('src', 'imagens/bebe-fem-250.png')
            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src', 'imagens/jovem-fem-250.png')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'imagens/adulto-fem-250.png')
            } else {
                //Idoso
                img.setAttribute('src', 'imagens/idoso-fem-250.png')
            }
        }
        
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos <br>`
        res.appendChild(img)
    }
}
