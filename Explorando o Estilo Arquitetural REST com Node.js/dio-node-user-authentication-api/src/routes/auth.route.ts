import { Router, Request, Response, NextFunction } from 'express';
import ForbiddenError from '../models/errors/forbidden.error.model';
import userRepository from '../repositories/user.repository';
import JWT, { SignOptions } from 'jsonwebtoken';
import { StatusCodes } from 'http-status-codes';
import basicAuthMiddleware from '../middlewares/basicAuthentication.middleware';
import jwtAuthMiddleware from '../middlewares/jwtAuthentication.middleware';

const authorizationRoute = Router();

authorizationRoute.post('/token', basicAuthMiddleware, async (req: Request, res: Response, next: NextFunction) => {

    try {
        const user = req.user;

        if (!user) {
            throw new ForbiddenError("Usuário não informado");
        }

        const JwtPayload = { username: user.username };
        const JwtOptions:SignOptions = { subject: user?.uuid, expiresIn: 60 };
        const secretKey = 'my_secret_key';

        const jwt = JWT.sign(JwtPayload, secretKey, JwtOptions);

        res.status(StatusCodes.OK).json({ token: jwt })

    } catch (error) {
        next(error);
    }

});

authorizationRoute.post('/token/validate', jwtAuthMiddleware, (req: Request, res: Response, next: NextFunction) => {
    res.sendStatus(StatusCodes.OK);
})


export default authorizationRoute;