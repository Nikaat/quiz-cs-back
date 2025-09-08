import cors from 'cors';
import path from "path";
import express from 'express';
import config from './config/base';
import { options } from './config/cors';
import { errorHandler } from './middlewares/error';
import { connectDB } from './lib/db/connection';

const app = express();

app.use(cors(options));

app.use(express.json());

app.use(errorHandler);

app.use('/', express.static(path.join(__dirname, 'public')));

connectDB().then(() => {
  app.listen(config.port, () =>
    console.log(`🚀 Server running at http://localhost:${config.port}`)
  );
});

export default app;