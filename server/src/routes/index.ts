import { Router } from 'express';
import { statusRoute } from './status';
import { redditRoute } from './reddit';

const routes = Router();

routes.use('/', statusRoute);
routes.use('/', redditRoute);

export default routes;
