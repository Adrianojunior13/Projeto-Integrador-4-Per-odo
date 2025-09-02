import { Router } from 'express';
import pessoaRoutes from './pessoaRoutes.js';
const routes = Router();
routes.use('/pessoas', pessoaRoutes);
export default routes;