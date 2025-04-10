function calcular(){
    //recupera o valor da ação social
    // declaração váriavel sem tipo
    let acaoSocial = document.getElementById("acaoSocial").value
    //recupera o valor da homenagem digitado
    let homenagem = document.getElementById("homenagem").value
    //vamos somar os valores
    //recupera a quantidade de litros de leite
    let leite = document.getElementById("leite").value

    let suplemento = document.getElementById("suplemento").value

    let arroz = document.getElementById("arroz").value
    
    let arroz1 = document.getElementById("arroz 1").value

    let feijao = document.getElementById("feijao").value

    let feijao1 = document.getElementById("feijao1").value

    let macarrao = document.getElementById("macarrao").value

    let oleo = document.getElementById("oleo").value

    let kit = Number(document.getElementById("kit").value)
    let equipe = document.getElementById("equipe").value
    let pontoskit = 0
    if (equipe == "Laranja") {
        if (kit >= 97 && suplemento >=49) {
            pontoskit = 5000 +((kit - 97) * 30)
        }
        else if(kit >= 78 && suplemento >=39) {
            pontoskit = 4000 +((kit - 78) *30)    
        }
        else if(kit >=49 && suplemento >=25){
            pontoskit = 2500 +((kit - 49) *30)
        }    
        else if(kit >=19 && suplemento >=10){
            pontoskit = 1000 + ((kit - 19) *30)
        }
        }
    
    if (equipe == "Preta") {
        if (kit >= 103 && suplemento >=52) {
            pontoskit = 5000 +((kit - 97) * 30)
        }
        else if(kit >= 82 && suplemento >=42) {
            pontoskit = 4000 +((kit - 78) *30)    
        }
        else if(kit >=52 && suplemento >=26){
            pontoskit = 2500 +((kit - 49) *30)
        }    
        else if(kit >=21 && suplemento >=10){
            pontoskit = 1000 + ((kit - 19) *30)
        }
        }

    if (equipe == "Roxa") {
            if (kit >= 102 && suplemento >=51) {
                pontoskit = 5000 +((kit - 97) * 30)
            }
            else if(kit >= 82 && suplemento >=41) {
                pontoskit = 4000 +((kit - 78) *30)    
            }
            else if(kit >=51 && suplemento >=26){
                pontoskit = 2500 +((kit - 49) *30)
            }    
            else if(kit >=20 && suplemento >=10){
                pontoskit = 1000 + ((kit - 19) *30)
            }
         }  
    if (equipe == "Verde") {
            if (kit >= 88 && suplemento >=44) {
                pontoskit = 5000 +((kit - 97) * 30)
            }
            else if(kit >= 70 && suplemento >=35) {
                pontoskit = 4000 +((kit - 78) *30)    
            }
            else if(kit >=44 && suplemento >=22){
                pontoskit = 2500 +((kit - 49) *30)
            }    
            else if(kit >=18 && suplemento >=9){
                pontoskit = 1000 + ((kit - 19) *30)
            }
         }  

    if (equipe == "Vermelha") {
            if (kit >= 93 && suplemento >=47) {
                pontoskit = 5000 +((kit - 97) * 30)
            }
            else if(kit >= 74 && suplemento >=38) {
                pontoskit = 4000 +((kit - 78) *30)    
            }
            else if(kit >=47 && suplemento >=24){
                pontoskit = 2500 +((kit - 49) *30)
            }    
            else if(kit >=19 && suplemento >=9){
                pontoskit = 1000 + ((kit - 19) *30)
            }
         }  
    
    let sangue = document.getElementById("sangue").value
    let pontossangue = 0
    if (equipe == "Laranja")
         if(sangue >= 49)
            pontossangue = 2500+((sangue - 49) * 20)
        else 
         pontossangue = (sangue * 20)
    
    if (equipe == "Preto")
         if(sangue >= 52)
            pontossangue = 2500+((sangue - 52) * 20)
        else 
         ponpue = sangue * 20  
        
    if (equipe == "Roxa")
         if(sangue >= 51)
            pontossangue = 2500+((sangue - 51) * 20)
        else 
         pontossangue = sangue * 20

     if (equipe == "Verde")
         if(sangue >= 44)
            pontossangue = 2500+((sangue - 44) * 20)
        else 
         pontossangue = sangue * 20

    if (equipe == "Vermelha")
         if(sangue >= 47)
            pontossangue = 2500+((sangue - 47) * 20)
        else 
         pontossangue = sangue * 20
    
    let pontuation = 0

    let soma = Number(acaoSocial) + Number(homenagem) + (2 * leite) + (pontoskit) + (15 * suplemento) + (5 * arroz) + Number(arroz1) + (2 * feijao) + Number(feijao1) + Number(0.5 * macarrao) + Number(oleo) + (pontossangue)
    // devolve o resultado para o HTML

    document.getElementById("soma").innerHTML = soma.toFixed(2)


}