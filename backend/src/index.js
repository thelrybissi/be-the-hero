const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();
app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);
/**
 * Tipos de parametros
 * Query Params: Parametros nomeados enviados na rota após "?" (Filtros e paginação)
 * Route Params: Parametros utilizados para identificar recursos
 * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
 */

 /**
  * SQL: MySQL, SQLLite, POstgresSQL
  * NoSQL: MongoDB, CouchDB
  */

  /**
   * Driver: SELECT * FROM
   * Query Builder: table('users'). select('*').where()
   */

   /**
    * Entidades: O que vai ser cadastrado no Banco de Dados 
    * ONG, Casos
    */
   /**
    * Funcionalidades: Login, cadastro Ong, cadastrar novos casos, deletar casos, listar casos de uma Ong, listar todos os casos e entrar em contato com a Ong
    */


