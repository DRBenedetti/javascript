function verificar() {
    var dia = new Date()
    var ano = dia.getFullYear()
    var nasc = document.getElementById('idade').value
    var calc = Number(ano) - Number(nasc)
    resposta.innerHTML = `Resposta: ${calc}`
}