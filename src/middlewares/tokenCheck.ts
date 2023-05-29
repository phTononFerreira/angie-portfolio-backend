import { NextFunction, Request, Response } from "express";

export function tokenCheck(req: Request, res: Response, next: NextFunction) {
    const SECRET_CODE = req.headers.secretcode
    if (!SECRET_CODE) {
        return res.status(401).end()
    }

    if (SECRET_CODE === process.env.SECRET_CODE) {
        return next()
    } else {
        return res.status(401).end()
    }
}