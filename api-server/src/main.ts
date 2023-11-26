import 'reflect-metadata';
import * as express from 'express';
import { AppDataSource } from './data-source';
import todoRoutes from './todo/todo.routes';

const app = express();
app.use(express.json());

AppDataSource.initialize()
  .then(() => {
    const port = 3000;
    app.listen(port, () => {
      console.log(`Server is running on port:${port}`);
    });
  })
  .catch((error) => {
    console.error('Database initialization failed:', error);
  });

/**
 * APIs
 *
 */
const apiPrefix = '/api';
app.use(`${apiPrefix}/`, todoRoutes);
