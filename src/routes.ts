import { Router } from 'express';
import UserController from './controllers/User';

const routes = Router();

const userController = new UserController();

routes.get('/users', userController.index);

routes.get('/users/:id', userController.show);

routes.post('/users', userController.create);

routes.put('/users/:id', userController.update);

routes.delete('/users/:id', userController.delete);

export default routes;
