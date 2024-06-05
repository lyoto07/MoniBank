export default function isCpf(campo){
    const cpf = campo.value.replace(/\.|-/g, "")
    if(validaNumerosRepetidos(cpf) || validaPrimeiroDigito(cpf) || validaSegundoDigito(cpf)){
        return console.log("esse cpf não existe")
    }
       return console.log("esse cpf existe");

}

function validaNumerosRepetidos(cpf){
    const numerosRepetidos = [
        '00000000000',
        '11111111111',
        '22222222222',
        '33333333333',
        '44444444444',
        '55555555555',
        '66666666666',
        '77777777777',
        '88888888888',
        '99999999999'
    ]
    return numerosRepetidos.includes(cpf);
}

function validaPrimeiroDigito(cpf) {
    let soma = 0;
    let multiplicador = 10;

    for (let tamanho = 0; tamanho < 9; tamanho++) {
        soma += cpf[tamanho] * multiplicador;
        multiplicador--
    }

    soma = (soma * 10) % 11;

    if (soma == 10 || soma == 11) {
        soma = 0;
    }
    console.log( `\nsegunda posicao\nValor da soma ${soma} \nPosicao do cpf ${cpf[9]}\nÉ valido: ${soma != cpf[9]} `);

    return soma != cpf[9];
}
function validaSegundoDigito(cpf){
    let soma = 0;
    let multiplicador = 11;

    for (let posicao = 0; posicao < 10; posicao++) {
        soma += cpf[posicao] * multiplicador;
        multiplicador--;
    }

    soma = (soma * 10) % 11;

    if(soma == 10 || soma == 11){
        soma = 0
    }

    console.log( `\nsegunda posicao\nValor da soma ${soma} \nPosicao do cpf ${cpf[10]}\nÉ valido: ${soma != cpf[10]} `);
    return soma != cpf[10];
}