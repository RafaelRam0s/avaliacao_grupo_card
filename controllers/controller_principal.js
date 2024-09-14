
const express = require('express');
const router = express.Router();
const path = require('path');
const Db_inscritos_fluxo = require('./../database/inscritos_fluxo.js');
const db = new Db_inscritos_fluxo();

// Rotas
router.get('/', (request, response) => {
    
    response.render('./../layouts/layout_principal.ejs', {
        titulo: 'Venha ser +fluxo',
        descricao: 'Levamos fluxo de clientes para seu estabelecimento através de produtos e serviços digitais do dia dia',
        palavras_chaves: 'recarga de bilhete unico, cardmidia, recarga de celular, opções de maquininha, controle de notas fiscais de entrada e saida',
        arquivo_a_carregar: './../views/home.ejs'
    });
    
});

router.get('/robots.txt', (request, response) => {
    response.sendFile(path.join(__dirname, '../views/robots.txt'));
});
router.get('/sitemap.xml', (request, response) => {
    response.sendFile(path.join(__dirname, '../views/sitemap.xml'));
});
router.get('/LICENSE', (request, response) => {
    response.sendFile(path.join(__dirname, '../views/LICENSE'));
});

router.post('/quero_fluxo', async (request, response) => {

    // Validar campos informados
    // Email, tem entre 3 e 255 caracteres e entre eles à um @
    let regex_texto_antes_arroba = /^.+(?=@)/;
    let regex_texto_pos_arroba = /(?<=@).+/;
    let regex_qtd_3_255 =  /^.{3,255}$/;
    // Número de contato está no padrão +xx (xxx) xxxxx-xxxx tendo entre 20 e 19 caracteres?
    let regex_contato = /^\+[0-9]{2} \([0-9]{3}\) [0-9]{4,5}-[0-9]{4}$/;
    // Nome, tem entre 1 e 255 caracteres
    // Localização, tem entre 1 e 255 caracteres
    // Local divulgado, tem entre 1 e 255 caracteres
    let regex_qtd_1_255 = /^.{1,255}$/;
    // CPF está no padrão xxx.xxx.xxx-xx tendo 14 caractestes?
    let regex_cpf = /^[0-9]{3}\.[0-9]{3}\.[0-9]{3}-[0-9]{2}$/;
    
    if (
        regex_texto_antes_arroba.test(request.body.email)
        && regex_texto_pos_arroba.test(request.body.email)
        && regex_qtd_3_255.test(request.body.email)
        && regex_contato.test(request.body.contato)
        && regex_qtd_1_255.test(request.body.nome)
        && regex_qtd_1_255.test(request.body.localizacao)
        && regex_qtd_1_255.test(request.body.local_divulgado)
        && regex_cpf.test(request.body.cpf)
    ) {
        // Criar no banco de dados as informações do usuário
        const resultado = await db.criar_registro(
            request.body.email, 
            request.body.contato, 
            request.body.nome, 
            request.body.localizacao, 
            request.body.cpf, 
            request.body.local_divulgado + (request.body.outros ? ' ' + request.body.outros : '' ),
            new Date()
        );

        if (resultado.sucesso === 200 && resultado.conteudo) {
            // Enviar para página de sucesso
            response.render('./../layouts/layout_principal.ejs', {
                titulo: 'Cadastro Efetuado',
                descricao: 'Levamos fluxo de clientes para seu estabelecimento através de produtos e serviços digitais do dia dia',
                palavras_chaves: 'recarga de bilhete unico, cardmidia, recarga de celular, opções de maquininha, controle de notas fiscais de entrada e saida',
                arquivo_a_carregar: './../views/sucesso_quero_fluxo.ejs'
            });
        }
    }

    // Enviar para página
    response.render('./../layouts/layout_principal.ejs', {
        titulo: 'Cadastro Não Efetuado',
        descricao: 'Levamos fluxo de clientes para seu estabelecimento através de produtos e serviços digitais do dia dia',
        palavras_chaves: 'recarga de bilhete unico, cardmidia, recarga de celular, opções de maquininha, controle de notas fiscais de entrada e saida',
        arquivo_a_carregar: './../views/erro_quero_fluxo.ejs'
    });
    
});


module.exports = router;