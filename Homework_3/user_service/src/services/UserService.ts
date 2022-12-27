import {
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  getAutoSuggestUsers
} from '../data-access/UserAccess';
import { IUser } from '../../interfaces/IUser';

export default class UserService {
  async getUserById(id: string) {
    return await getUserById(id);
  }

  async createUser(user: IUser) {
    return await createUser(user);
  }

  async updateUser(id: string, user: Partial<IUser>) {
    return await updateUser(id, user);
  }

  async deleteUser(id: string) {
    return await deleteUser(id);
  }

  async getAutoSuggestUsers(limit: number, subStr: string) {
    return await getAutoSuggestUsers(limit, subStr);
  }
}
