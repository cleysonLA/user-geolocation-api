import { Request, Response } from 'express';

import User from '../models/User';

export default class UserController {
  async index(request: Request, response: Response) {
    try {
      const users = await User.find({});

      return response.send({ users });
    } catch {
      return response.status(400).send({ error: 'Get all users failed' });
    }
  }

  async show(request: Request, response: Response) {
    try {
      const { id: _id } = request.params;

      const user = await User.findById(_id);

      return response.send({ user });
    } catch {
      return response.status(400).send({ error: 'Get user failed' });
    }
  }

  async create(request: Request, response: Response) {
    try {
      const data = request.body;

      const user = await User.create(data);

      return response.send({ user });
    } catch {
      return response.status(400).send({ error: 'Registration failed' });
    }
  }

  async update(request: Request, response: Response) {
    try {
      const data = request.body;
      const { id: _id } = request.params;

      await User.updateOne({ _id }, data);

      return response.send();
    } catch {
      return response.status(400).send({ error: 'Updating failed' });
    }
  }

  async delete(request: Request, response: Response) {
    try {
      const { id: _id } = request.params;

      await User.deleteOne({ _id });

      return response.send();
    } catch {
      return response.status(400).send({ error: 'Deleting failed' });
    }
  }
}
