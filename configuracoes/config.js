
const mysql = require('mysql2');

// Configuração do banco de dados
const DB_GRUPO_CARD = {
    host: '127.0.0.1', 
    database: 'db_grupo_card',
    charset: 'utf8',
    user: 'site_grupo_card', 
    password: 'Senha_grupo_card_123'
};
const AES_KEY_DB_GRUPO_CARD = 'ZZTcBgtE0nkKvK5cr1xWN9cu'; // Deve ter 24 Caracteres
// Configurações do MySQL
const database_connection = mysql.createConnection(DB_GRUPO_CARD);

// Exportando as configurações e funções
module.exports = {
    AES_KEY_DB_GRUPO_CARD,
    database_connection
};
