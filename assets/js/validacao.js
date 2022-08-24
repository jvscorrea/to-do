export function valida(input) {
    const tipoDeInput = input.dataset.tipo

    if(input.validity.valid) {
        input.parentElement.classList.remove('input--invalido')
        input.parentElement.querySelector('.msg-erro').innerHTML = ''
    } else {
        input.parentElement.classList.add('input--invalido')
        input.parentElement.querySelector('.msg-erro').innerHTML = mostraMensagemDeErro(tipoDeInput, input)
    }
}

const tiposDeErro = [
    'valueMissing'
]

const mensagensDeErro = {
    nome: {
        valueMissing: 'O campo tarefa não pode estar vazio.'
    }
}

function mostraMensagemDeErro(tipoDeInput, input) {
    let mensagem = ''
    tiposDeErro.forEach(erro => {
        if(input.validity[erro]) {
            mensagem = mensagensDeErro[tipoDeInput][erro]
        }
    })
    
    return mensagem
}
