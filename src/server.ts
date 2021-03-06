import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import routes from './routes';

const app = express();

app.use(cors());

app.use(express.json());

app.use(routes);

mongoose.connect('mongodb://localhost:27017/users', {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.listen(3333);
