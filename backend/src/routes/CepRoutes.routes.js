import { Router } from 'express';

import CepController from '../app/controllers/CepController';

const routes = Router();

routes.get('/ceps', CepController.index);
routes.post('/ceps', CepController.store);
routes.get('/ceps/check', CepController.check);
routes.put('/ceps/:id', CepController.update);
routes.delete('/ceps/:id', CepController.delete);

export default routes;
