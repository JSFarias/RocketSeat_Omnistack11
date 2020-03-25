const express = require('express')

const OngController = require('./controllers/OngController')
const IncidentController = require('./controllers/IncidentController')
const ProfileController = require('./controllers/ProfileController')
const SessionController = require('./controllers/SessionController')

const routes = express.Router();

/**
 * tipos de parametros:
 * Query Params: req.query (para acessar db)
 * Route Params: req.params (para acessar db)
 * Body Params: req.body (para criar usuarios)
 */

 /**
  * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
  * NoSQL: MongoDB, CouchDB, etc
  */

  /**
   * npm: serve para instalar um pacote
   * npx: serve para executar um pacote
   */

routes.post('/sessions', SessionController.create)

routes.get('/ongs', OngController.index)
routes.post('/ongs', OngController.create)

routes.get('/profile', ProfileController.index)

routes.get('/incidents', IncidentController.index)
routes.post('/incidents', IncidentController.create)
routes.delete('/incidents/:id', IncidentController.delete)


module.exports = routes