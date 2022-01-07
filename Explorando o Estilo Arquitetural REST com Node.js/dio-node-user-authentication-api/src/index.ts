import express from 'express';
import basicAuthMiddleware from './middlewares/basicAuthentication.middleware';
import jwtAuthMiddleware from './middlewares/jwtAuthentication.middleware';
import errorHandler from './middlewares/error-handler.middleware';
import authorizationRoute from './routes/auth.route';
import statusRoute from './routes/status.route';
import usersRoute from './routes/users.route';

const app = express();

//Configurações da Aplicação
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Configuração de Rotas
app.use(statusRoute);
app.use(authorizationRoute);
app.use(jwtAuthMiddleware);
app.use(usersRoute);

//Configuração dos Handlers de erro
app.use(errorHandler);

//Inicialização do Servidor
app.listen(3000, () => {
    console.log('Aplicação executando na porta 3000')
});

