function revendaVeiculo() {
    // criar referência aos elementos da página
    let inVeiculo = document.querySelector('#inVeiculo');
    let inPreco = document.querySelector('#inPreco');
    let outPromo = document.querySelector('#outPromo');
    let outEntrada = document.querySelector('#outEntrada');
    let outParcelas = document.querySelector('#outParcelas');

    // obtém conteúdos dos campos de entrada
    let veiculo = inVeiculo.value;
    let preco = Number(inPreco.value);
    
    // cálculo da entrada e parcelas
    let entrada = preco * 0.5;
    let parcelas = (preco - entrada) / 12;
    // altera o conteúdo de saída
    outPromo.textContent = `Promoção: ${veiculo}`;
    outEntrada.textContent = `Entrada de R$: ${entrada.toFixed(2)}`;
    outParcelas.textContent = `+ 12x de R$: ${parcelas.toFixed(2)}`;
}
// criar referência ao botão de processamento de dados
let btVerPromo = document.querySelector('#btVerPromo');
btVerPromo.addEventListener("click", revendaVeiculo);