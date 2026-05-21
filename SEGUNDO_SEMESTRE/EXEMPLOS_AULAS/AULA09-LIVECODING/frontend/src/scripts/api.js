const BASE_URL = "http://localhost:3000"

// 1. BUSCAR PRODUTOS

async function buscarProdutos() {
    const response = await fetch(`${BASE_URL}/produtos`)
    const dados = await response.json()

    if (!response.ok) throw new Error(dados.erro || `Erro ${response.status}`)

        return dados.dados
    
}

// 2. CRIAR PEDIDOS

async function criarPedido(cliente, itens) {
    // Solicita comunicação e executa o método POST (publica o cliente e os item do pedido)
    const response = await fetch(`${BASE_URL}/pedidos`, {
    method: "POST",
    headers: {"Content-Type" : "application/json"},
    body: JSON.stringify({cliente, itens}),
    })

    const dados = await response.json()

    if(!response.ok) throw new Error (dados.erro || `Erro ${response.status}`)

    return dados
}


// 3. BUSCAR PEDIDOS - (FOCO PARA A COZINHA TER ACESSO AOS PEDIDOS)

async function buscarPedidos() {
    const response = await fetch(`${BASE_URL}/pedidos`)
    const dados = await response.json()

    if (!response.ok) throw new Error (dados.erro || `Erro ${response.status}`)

    return dados 

}



// 4. DELETAR PEDIDO - UTILIZADO PELA COZINHA

async function deletarPedido(id) {
    const response = await fetch(`${BASE_URL}/pedidos/${id}`, {
        method: "DELETE", 
    })
    
    const dados = await response.json()
    if(!response.ok) throw new Error (dados.erro || `Erro ${response.status}`)

    return dados
    
}




// 5. ATUALIZAR STATUS PEDIDO

async function atualizarStatusPedido(id, novoStatus) {
    const response = await fetch(`${BASE_URL}/pedidos/${id}/status`, {
        method: "PATCH",
        headers: {"Content-Type" : "application/json"},
        body: JSON.stringify({status: novoStatus})
    })

    const dados = await response.json()

    if(!response.ok) throw new Error (dados.erro || `Erro ${response.status}`)

    return dados 
    
}