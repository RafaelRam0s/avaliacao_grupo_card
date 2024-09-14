// ------------------------------------------------------------------------
// Tabela no banco de dados
// ------------------------------------------------------------------------
/* 
CREATE TABLE IF NOT EXISTS inscritos_fluxo (
    id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    email VARBINARY(1000) NOT NULL UNIQUE,
    numero_contato VARCHAR(31) NOT NULL,
    nome VARCHAR(255) NOT NULL,
    localizacao VARCHAR(255) NOT NULL,
    cpf VARCHAR(15) NOT NULL,
    divulgado_por VARCHAR(255) NOT NULL,
    assinado_politica_de_privacidade DATETIME NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
*/

const mysql = require('mysql2');
const { database_connection, AES_KEY_DB_GRUPO_CARD } = require('./../configuracoes/config.js');

class Db_inscritos_fluxo {
    // Criação do registro
    async criar_registro(email, numero_contato, nome, localizacao, cpf, divulgado_por, assinado_politica_de_privacidade) {
        try {
            const query = `
                INSERT INTO inscritos_fluxo (email, numero_contato, nome, localizacao, cpf, divulgado_por, assinado_politica_de_privacidade)
                VALUES (AES_ENCRYPT(?, UNHEX(SHA2(?, 512))), ?, ?, ?, ?, ?, ?)
            `;
            const [result] = await database_connection.promise().query(query, [email, AES_KEY_DB_GRUPO_CARD, numero_contato, nome, localizacao, cpf, divulgado_por, assinado_politica_de_privacidade]);

            return {
                sucesso: 200,
                mensagem: 'Operação efetuada com sucesso',
                conteudo: result.insertId
            };
        } catch (error) {
            return {
                sucesso: 400,
                mensagem: 'Operação com erro!',
                conteudo: error
            };
        }
    }

    // Leitura do registro
    async ler_registros() {
        try {
            const query = `
                SELECT AES_DECRYPT(email, UNHEX(SHA2(?, 512))) AS email, id, numero_contato, nome, localizacao, cpf, divulgado_por, assinado_politica_de_privacidade, created_at
                FROM inscritos_fluxo
            `;
            const [rows] = await database_connection.promise().query(query, [AES_KEY_DB_GRUPO_CARD]);

            return {
                sucesso: 200,
                mensagem: 'Operação efetuada com sucesso',
                conteudo: rows
            };
        } catch (error) {
            return {
                sucesso: 400,
                mensagem: 'Operação com erro!',
                conteudo: error
            };
        }
    }

    // Leitura paginada dos registros
    async ler_registro_paginando(pagina = 1, quantidade_de_registros = 10) {
        try {
            const offset = (pagina - 1) * quantidade_de_registros;
            const query = `
                SELECT AES_DECRYPT(email, UNHEX(SHA2(?, 512))) AS email, numero_contato, nome, localizacao, cpf, divulgado_por, assinado_politica_de_privacidade, created_at
                FROM inscritos_fluxo
                LIMIT ? OFFSET ?
            `;
            const [rows] = await database_connection.promise().query(query, [AES_KEY_DB_GRUPO_CARD, quantidade_de_registros, offset]);

            return {
                sucesso: 200,
                mensagem: 'Operação efetuada com sucesso',
                conteudo: rows
            };
        } catch (error) {
            return {
                sucesso: 400,
                mensagem: 'Operação com erro!',
                conteudo: error
            };
        }
    }

    // Leitura do registro por ID
    async ler_registro_por_id(id) {
        try {
            const query = `
                SELECT AES_DECRYPT(email, UNHEX(SHA2(?, 512))) AS email, numero_contato, nome, localizacao, cpf, divulgado_por, assinado_politica_de_privacidade, created_at
                FROM inscritos_fluxo
                WHERE id = ?
            `;
            const [rows] = await database_connection.promise().query(query, [AES_KEY_DB_GRUPO_CARD, id]);

            return {
                sucesso: 200,
                mensagem: 'Operação efetuada com sucesso',
                conteudo: rows
            };
        } catch (error) {
            return {
                sucesso: 400,
                mensagem: 'Operação com erro!',
                conteudo: error
            };
        }
    }

    // Atualização do registro
    async atualizar_registro(id, email, numero_contato, nome, localizacao, cpf, divulgado_por, assinado_politica_de_privacidade) {
        try {
            const query = `
                UPDATE inscritos_fluxo
                SET email = AES_ENCRYPT(?, UNHEX(SHA2(?, 512))), numero_contato = ?, nome = ?, localizacao = ?, cpf = ?, divulgado_por = ?, assinado_politica_de_privacidade = ?
                WHERE id = ?
            `;
            const [result] = await database_connection.promise().query(query, [email, AES_KEY_DB_GRUPO_CARD, numero_contato, nome, localizacao, cpf, divulgado_por, assinado_politica_de_privacidade, id]);

            return {
                sucesso: 200,
                mensagem: 'Operação efetuada com sucesso',
                conteudo: null
            };
        } catch (error) {
            return {
                sucesso: 400,
                mensagem: 'Operação com erro!',
                conteudo: error
            };
        }
    }

    // Deleção do registro
    async deletar_registro(id) {
        try {
            const query = `DELETE FROM inscritos_fluxo WHERE id = ?`;
            const [result] = await database_connection.promise().query(query, [id]);

            return {
                sucesso: 200,
                mensagem: 'Operação efetuada com sucesso',
                conteudo: null
            };
        } catch (error) {
            return {
                sucesso: 400,
                mensagem: 'Operação com erro!',
                conteudo: error
            };
        }
    }
}

module.exports = Db_inscritos_fluxo;
