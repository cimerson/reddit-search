import express, { Express } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import routes from './routes';

dotenv.config();

const app: Express = express();

const port = process.env.PORT;

const corsOptions = {
  origin: process.env.CLIENT_URL
}

app.use(express.json())

app.use(cors());
app.use(cors(corsOptions));

app.use(routes);

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
