import { Router } from 'express';
import {
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  getAutoSuggestUsers
} from '../controllers/user.controller';

export const router: Router = Router();

router.route('/').post(createUser);
router.route('/:id').get(getUserById).patch(updateUser).delete(deleteUser);
router.route('/auto-suggest/:limit/:subStr').get(getAutoSuggestUsers);
