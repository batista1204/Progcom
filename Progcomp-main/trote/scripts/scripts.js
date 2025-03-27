function calcular(){
    //recupera o valor da ação social
    // declaração váriavel sem tipo
    let acaoSocial = document.getElementById("acaoSocial").value
    //recupera o valor da homenagem digitado
    let homenagem = document.getElementById("homenagem").value
    //vamos somar os valores
    //recupera a quantidade de litros de leite
    let leite = document.getElementById("leite").value

    let kit = document.getElementById("kit").value

    let suplemento = document.getElementById("suplemento").value

    let arroz = document.getElementById("arroz").value
    
    let arroz1 = document.getElementById("arroz 1").value

    let feijao = document.getElementById("feijao").value

    let feijao1 = document.getElementById("feijao1").value

    let macarrao = document.getElementById("macarrao").value

    let oleo = document.getElementById("oleo").value

    let soma = Number(acaoSocial) + Number(homenagem) + (2 * leite) + (30 * kit) + (15 * suplemento) + (5 * arroz) + Number(arroz1) + (2 * feijao) + Number(feijao1) + Number(macarrao / 2) + Number(oleo)
    // devolve o resultado para o HTML

    document.getElementById("soma").innerHTML = soma.toFixed(2)


}