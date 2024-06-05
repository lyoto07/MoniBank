export default function isMaiorDeIdade(campo){
    const dataNascimento = new Date(campo.value);
    dataNascimento.getUTCDate();
    console.log(validaIdade(dataNascimento));
}

function validaIdade(data){
    const dataAtual = new Date();
    const dataMais18 = new Date(data.getFullYear() + 18, data.getUTCMonth(), data.getUTCDate());

    return dataAtual >= dataMais18;
}