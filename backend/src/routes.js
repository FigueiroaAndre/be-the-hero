const express = require('express');
const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();


// Query params: parametros enviados na rota após o sinal de "?" (filtros,paginação) //request.query
// Route params: Parametros utilizados para identificar recursos (e.g. id de usuario) //request.params
// request's body: corpo da requisição, utilizado para criar ou alterar recursos//request.body

routes.post('/sessions',SessionController.create);

routes.post('/ongs',OngController.create);
routes.get('/ongs',OngController.index);

routes.get('/profile',ProfileController.index);

routes.post('/incidents',IncidentController.create);
routes.get('/incidents',IncidentController.index);
routes.delete('/incidents/:id', IncidentController.delete);

module.exports = routes;