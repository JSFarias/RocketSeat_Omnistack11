const express = require('express')
const {celebrate, Segments, Joi} = require('celebrate')

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

   /**
    * TDD - Test-Driven Development
    */

routes.post('/sessions', celebrate({
   [Segments.BODY]: Joi.object().keys({
      id: Joi.string().required()
   })
}), SessionController.create)

routes.get('/ongs', OngController.index)
routes.post('/ongs', celebrate({
   [Segments.BODY]: Joi.object().keys({
      name: Joi.string().required(),
      email: Joi.string().required().email(),
      whatsapp: Joi.string().required().min(10).max(11),
      city: Joi.string().required(),
      uf: Joi.string().required().length(2),
   })
}), OngController.create)

routes.get('/profile', celebrate({
   [Segments.HEADERS]:Joi.object({
      authorization: Joi.string().required()
   }).unknown()
}), ProfileController.index)

routes.get('/incidents', celebrate({
   [Segments.QUERY]: Joi.object().keys({
      page:  Joi.number()
   })
}), IncidentController.index)
routes.post('/incidents', celebrate({
   [Segments.BODY]: Joi.object().keys({
      title: Joi.string().required().min(5).max(25),
      description: Joi.string().required(),
      value: Joi.number().required(),
   }),   
   [Segments.HEADERS]: Joi.object({
      authorization: Joi.string().required()
   }).unknown()
}), IncidentController.create)
routes.delete('/incidents/:id', celebrate({
   [Segments.PARAMS]: Joi.object().keys({
      id: Joi.number().required()
   })
}), IncidentController.delete)


module.exports = routes