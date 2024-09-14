const Db_inscritos_fluxo = require('./inscritos_fluxo.js');
const db = new Db_inscritos_fluxo();

// Adicionar um registro e mostrar o retorno no console
async function teste_criar_registro() {
    console.log('Teste Criar Registro:');
    const resultado = await db.criar_registro(
        'teste@example.com', '123456789', 'João Silva', 'São Paulo', '12345678901', 'Admin', new Date()
    );
    console.log(resultado);
}

// Ler registros e mostrar o retorno no console
async function teste_ler_registro() {
    console.log('Teste Ler Registro:');
    const resultado = await db.ler_registros('teste@example.com');
    console.log(resultado);
}

// Ler registros paginando e mostrar o retorno no console
async function teste_ler_registro_paginando() {
    console.log('Teste Ler Registro Paginando:');
    const resultado = await db.ler_registro_paginando(1, 10);
    console.log(resultado);
}

// Ler registro por id e mostrar o retorno no console
async function teste_ler_registro_por_id() {
    console.log('Teste Ler Registro por ID:');
    // Primeiro, crie um registro para obter o ID
    const criar = await db.criar_registro('teste2@example.com', '987654321', 'Maria Oliveira', 'Rio de Janeiro', '10987654321', 'Admin', new Date());
    const id = criar.conteudo;

    // Depois, use o ID para ler o registro
    const resultado = await db.ler_registro_por_id(id);
    console.log(resultado);
}

// Atualizar registro por id e mostrar o retorno no console
async function teste_atualizar_registro() {
    console.log('Teste Atualizar Registro:');
    // Primeiro, crie um registro para obter o ID
    const criar = await db.criar_registro('teste3@example.com', '567890123', 'Carlos Pereira', 'Belo Horizonte', '12345678912', 'Admin', new Date());
    const id = criar.conteudo;

    // Depois, atualize o registro
    const resultado = await db.atualizar_registro(id, 'teste3_updated@example.com', '567890123', 'Carlos Pereira', 'Belo Horizonte', '12345678912', 'Admin', new Date());
    console.log(resultado);
}

// Deletar registro e mostrar o retorno no console
async function teste_deletar_registro() {
    console.log('Teste Deletar Registro:');
    // Primeiro, crie um registro para obter o ID
    const criar = await db.criar_registro('teste4@example.com', '678901234', 'Ana Souza', 'Curitiba', '34567890123', 'Admin', new Date());
    const id = criar.conteudo;

    // Depois, delete o registro
    const resultado = await db.deletar_registro(id);
    console.log(resultado);
}

// Execute os testes
(async function() {
    await teste_criar_registro();
    await teste_ler_registro();
    await teste_ler_registro_paginando();
    await teste_ler_registro_por_id();
    await teste_atualizar_registro();
    await teste_deletar_registro();
})();
