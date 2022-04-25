import cors from 'cors';
import express from 'express';
import "express-async-errors";
import authRouter from './routers/authRouter.js';
import handleErrorsMiddleware from './middlewares/handleErrorsMiddleware.js';
import testRouter from './routers/testRouter.js';

const app = express();

app.use(cors());
app.use(express.json());
app.use(authRouter);
app.use(testRouter);
app.use(handleErrorsMiddleware);

export default app;