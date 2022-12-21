import  {Express, Request, Response, Router} from 'express';
import { getUserById } from '../controllers/userController';

export const router: Router = Router();

router.route('/:id').get(getUserById);