function calcular(){
    //recupera o valor da ação social
    // declaração váriavel sem tipo
    let acaoSocial = document.getElementById("acaoSocial").value
    //recupera o valor da homenagem digitado
    let homenagem = document.getElementById("homenagem").value
    //vamos somar os valores
    //recupera a quantidade de litros de leite
    let leite = document.getElementById("leite").value

    let kit = Number(document.getElementById("kit").value)
    let equipe = document.getElementById("equipe").value
    let pontoskit = 0
    if (equipe == "Laranja") {
        if (kit >= 97) {
            pontoskit = 5000 +((kit - 97) * 30)
        }
        else if(kit >= 78) {
            pontoskit = 4000 +((kit - 78) *30)    
        }
        else if(kit >=49){
            pontoskit = 2500 +((kit - 49) *30)
        }    
        else if(kit >=19){
            pontoskit = 1000 + ((kit - 19) *30)
        }
        }
    
    alert(pontoskit)


    let suplemento = document.getElementById("suplemento").value

    let arroz = document.getElementById("arroz").value
    
    let arroz1 = document.getElementById("arroz 1").value

    let feijao = document.getElementById("feijao").value

    let feijao1 = document.getElementById("feijao1").value

    let macarrao = document.getElementById("macarrao").value

    let oleo = document.getElementById("oleo").value

    let pontuation = 0

    if (kit >= 100) {
        pontuation = 4000
    }

    let soma = Number(acaoSocial) + Number(homenagem) + (2 * leite) + (30 * kit) + (15 * suplemento) + (5 * arroz) + Number(arroz1) + (2 * feijao) + Number(feijao1) + Number(0.5 * macarrao) + Number(oleo)
    // devolve o resultado para o HTML

    document.getElementById("soma").innerHTML = soma.toFixed(2)


}