import { Request, Response } from 'express';

export const statusController = (req: Request, res: Response) => {
    res.status(200).send('Express Server Is Running');
};
