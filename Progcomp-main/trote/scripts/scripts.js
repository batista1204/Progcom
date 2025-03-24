function calcular(){
    //recupera o valor da ação social
    // declaração váriavel sem tipo
    let acaoSocial = document.getElementById("acaoSocial").value
    //recupera o valor da homenagem digitado
    let homenagem = document.getElementById("homenagem").value
    //vamos somar os valores
    let soma = Number(acaoSocial) + Number(homenagem)
    alert(soma)

}