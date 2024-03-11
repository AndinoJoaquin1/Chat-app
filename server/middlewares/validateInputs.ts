import { NextFunction, Request, Response } from 'express';
import { validationResult } from 'express-validator';

export const validateInputs =  (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);
 console.log(errors.mapped())
    if (!errors.isEmpty()) {
        return res.status(400).json({
            msg: errors.mapped()
        })
    }

    next();
}