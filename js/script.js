import isCpf from "./isCpf.js";
import isMaiorDeIdade from "./isMaiorDeIdade.js";
const camposFormulario = document.querySelectorAll('[required]');

const formulario = document.querySelector('[data-formulario');

const tiposDeErro = [
    'valueMissing',
    'typeMismatch',
    'patternMismatch',
    'tooShort',
    'customError'
]

const mensagens = {
    nome: {
        valueMissing: "O campo de nome não pode estar vazio.",
        patternMismatch: "Por favor, preencha um nome válido.",
        tooShort: "Por favor, preencha um nome válido."
    },
    email: {
        valueMissing: "O campo de e-mail não pode estar vazio.",
        typeMismatch: "Por favor, preencha um email válido.",
        tooShort: "Por favor, preencha um e-mail válido."
    },
    rg: {
        valueMissing: "O campo de RG não pode estar vazio.",
        patternMismatch: "Por favor, preencha um RG válido.",
        tooShort: "O campo de RG não tem caractéres suficientes."
    },
    cpf: {
        valueMissing: 'O campo de CPF não pode estar vazio.',
        patternMismatch: "Por favor, preencha um CPF válido.",
        customError: "O CPF digitado não existe.",
        tooShort: "O campo de CPF não tem caractéres suficientes."
    },
    aniversario: {
        valueMissing: 'O campo de data de nascimento não pode estar vazio.',
        customError: 'Você deve ser maior que 18 anos para se cadastrar.'
    },
    password: {
        valueMissing: "O campo de Senha não pode estar vazio.",
        patternMismatch: "Por favor, sua senha deve conter A,a,-,!,@.",
        tooShort: "Por favor, preencha com uma Senha válida."
    },
    termos: {
        valueMissing: 'Você deve aceitar nossos termos antes de continuar.',
    }
}

camposFormulario.forEach((campo) => {
    campo.addEventListener('blur', () => verificaCampo(campo));
    campo.addEventListener('invalid', evento => evento.preventDefault());
});



function verificaCampo(campo){
    let mensagem = ''
    if(campo.name == 'cpf' && campo.value.length >= 11){
        isCpf(campo);
    }
    if(campo.name == 'aniversario' && campo.value.length != ""){
        isMaiorDeIdade(campo);
    }
    console.log(campo.name)
    tiposDeErro.forEach(erro => {
        if(campo.validity[erro]){
            mensagem = mensagens[campo.name][erro];
            console.log(mensagem)
        }
    });

    const validadorDeInput = campo.checkValidity();
    const mensagemErro = campo.parentNode.querySelector('.mensagem-erro');
    if (!validadorDeInput) {
        mensagemErro.textContent = mensagem;
    } else {
        mensagemErro.textContent = "";
    }
}

formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    const listaDeResposta = {
        "nome": e.target.elements["nome"].value,
        "email": e.target.elements["email"].value,
        "rg": e.target.elements["rg"].value,
        "cpf": e.target.elements["cpf"].value,
        "aniversario": e.target.elements["aniversario"].value,
    }

    localStorage.setItem("cadastro", JSON.stringify(listaDeResposta));

    window.location.href = "./abrir-conta-form-2.html";
})


