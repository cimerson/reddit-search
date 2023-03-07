import { Router } from 'express';
import { redditController } from '../controllers/reddit';

const router = Router();

router.post('/reddit', redditController);

export {router as redditRoute};