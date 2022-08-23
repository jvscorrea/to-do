const form = document.getElementById("novoItem")
const lista = document.getElementById("lista")
const itens = JSON.parse(localStorage.getItem("item")) || []

itens.forEach( (elemento) => {
    criarElemento(elemento)
})

form.addEventListener("submit", (evento) =>{
    evento.preventDefault()

    const nome = evento.target.elements['nome']
    
    const itemAtual = {
        "nome": nome.value
    }

    criarElemento(itemAtual)

    itens.push(itemAtual)

    localStorage.setItem("item", JSON.stringify(itens))

    nome.value = ""
})

function criarElemento(item){
    console.log(nome)

    const novoItem = document.createElement('li')
    novoItem.classList.add('item', 'text-break', 'bg-white', 'p-2', 'w-100', 'rounded', 'mb-2', 'd-flex', 'justify-content-between')
    novoItem.innerHTML += item.nome
    novoItem.dataset.id = item.id

    lista.appendChild(novoItem)

    novoItem.appendChild(botaoElemento(item.id))
}

function atualizaElemento(item) {
    document.querySelector("[data-id='"+item.id+"']").innerHTML = item.nome
}

function botaoElemento(id){
    const elementoBotao = document.createElement("a")
    elementoBotao.classList.add('text-nowrap', 'ps-1','text-danger', 'btn-sm', 'text-end', 'text-decoration-none')
    elementoBotao.innerText = "Excluir"

    elementoBotao.addEventListener("click", function(){
        deletaElemento(this.parentNode, id)
    })

    return elementoBotao
}

function deletaElemento(tag, id) {
    tag.remove()

    itens.splice(itens.findIndex(elemento => elemento.id === id), 1)

    localStorage.setItem("item", JSON.stringify(itens))
}