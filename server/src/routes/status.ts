import { Router } from 'express';
import { statusController } from '../controllers/status';

const router = Router();

router.get('/status', statusController);

export {router as statusRoute};
