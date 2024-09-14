// Criar uma aplicação
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// Registrar o template
app.set('view engine', 'ejs');
app.set('views', './views');

// Definir o local a ser executado o código
const host = 'localhost';
const port = '8080';

app.listen(port, host, () => {
    console.log('Servidor em execução na url: ' + host + ':' + port);
});

// Middleware
app.use(express.static('./assets/')); // Configuração de rota de arquivos
app.use(express.json()); // Para parsing de application/json
app.use(express.urlencoded({ extended: true })); // Para parsing de application/x-www-form-urlencoded

//Configurações gerais de redirecionamento
app.use((request, response, next) => {
    // Redirecionar para uma controller para verificar se está com acesso permitido
    
    // Permitir sair dessa função e executar outras, se tirar a linha abaixo o código fica em loop dentro desta função
    next();
});

// Rotas para Controllers
const controller_principal = require('./controllers/controller_principal.js');
app.use('/', controller_principal);

// Se nenhuma rota encontrada, redirecionar para erro 404
app.use((request, response) => {
    
    response.status(404).render('./../layouts/layout_principal.ejs', {
        titulo: 'Erro 404',
        descricao: 'Oops! A página que você está procurando não foi encontrada. Pode ser que tenha sido movida ou excluída. Utilize o menu para navegar pelo site ou volte para a página inicial.',
        palavras_chaves: '404, página não encontrada, erro 404, página perdida, link quebrado',
        arquivo_a_carregar: './../views/404.ejs'
    });

});
