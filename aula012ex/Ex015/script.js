function verificar() {
    var dia = new Date() // Cria um objeto Date para pegar a data atual
    
    var ano = dia.getFullYear() // Obtém o ano atual (exemplo: 2024)
    
    var nasc = document.getElementById('idade') // Pega o elemento input com o id 'idade' onde o usuário insere o ano de nascimento
    
    var res = document.getElementById('resposta') // Pega o elemento div com o id 'resposta' onde o resultado será exibido

    // Verifica se o campo de ano de nascimento está vazio ou se o ano informado é maior que o ano atual
    if (nasc.value.length == 0 || nasc.value > ano) {
        window.alert('Verifique os dados e tente novamente. ') // Exibe um alerta se os dados forem inválidos

    } else {
        
        var sex = document.getElementsByName('isexo')// Pega os botões de rádio que indicam o sexo da pessoa (nome dos inputs 'isexo')
        
        var idade = ano - Number(nasc.value)// Calcula a idade subtraindo o ano de nascimento do ano atual
        
        var genero = '' // Inicializa uma variável para armazenar o gênero da pessoa
        
        var img = document.createElement('img')// Cria um elemento de imagem (img) dinamicamente
        
        img.setAttribute('id', 'foto')// Define o id da imagem como 'foto'
        
        // Verifica se o botão de rádio masculino está marcado
        if (sex[0].checked) {
            genero = 'Homem' // Define o gênero como 'Homem'
            
            // Verifica a faixa etária e seleciona a imagem correspondente
            if (idade >= 0 && idade < 10) {
                //Criança
                img.setAttribute('src', 'imagens/bebe-masc-250.png')    // Se a pessoa tiver entre 0 e 9 anos, exibe a imagem de um bebê menino
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
        
        res.style.textAlign = 'center'  // Centraliza o texto de resposta (Talvez necessite de um pouco de CSS)

        res.innerHTML = `Detectamos ${genero} com ${idade} anos <br>`   // Exibe o gênero e a idade da pessoa no elemento 'resposta'
        
        res.appendChild(img)    // Adiciona a imagem correspondente ao elemento de resposta
    }
}
