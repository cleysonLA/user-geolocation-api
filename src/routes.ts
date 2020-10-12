import { Router } from 'express';
import UserController from './controllers/User';

const routes = Router();

const userController = new UserController();

routes.get('/user/:id', userController.index);

routes.post('/user', userController.create);

routes.put('/user/:id', userController.update);

routes.delete('/user/:id', userController.delete);

export default routes;
