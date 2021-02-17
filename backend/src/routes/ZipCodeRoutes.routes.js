import { Router } from 'express';

import ZipCodeController from '../app/controllers/ZipCodeController';

const routes = Router();

routes.get('/zipCodes', ZipCodeController.index);
routes.post('/zipCodes', ZipCodeController.store);
routes.get('/zipCodes/check', ZipCodeController.check);
routes.put('/zipCodes/:id', ZipCodeController.update);
routes.delete('/zipCodes/:id', ZipCodeController.delete);

export default routes;
