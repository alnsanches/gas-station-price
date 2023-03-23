function calcular() {
    const litroCombustivel = parseFloat(document.getElementById('litrocombustivel').value);
    const valorPorLitro = parseFloat(document.getElementById('valorporlitro').value);

    var total = ((litroCombustivel * valorPorLitro)).toFixed(2);
    var totalPagar = (document.getElementById('totalapagar').innerHTML = '<p>R$ </p>' + total);

}