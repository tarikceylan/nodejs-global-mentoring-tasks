import { User } from '../models/User.model';
import { IUser } from '../../interfaces/IUser';
import { Op } from 'sequelize';
import hashPwd from '../utils/hash';

export const getUserById = async (id: string) => {
  return await User.findByPk(id);
};

export const createUser = async (user: IUser) => {
  user.password = await hashPwd(user.password);
  return await User.create({ ...user });
};

export const updateUser = async (id: string, user: Partial<IUser>) => {
  if (user.password) {
    user.password = await hashPwd(user.password);
  }
  return await User.update({ ...user }, { where: { id }, returning: true });
};

export const deleteUser = async (id: string) => {
  return await User.update({ is_deleted: true }, { where: { id } });
};

export const getAutoSuggestUsers = async (limit: number, subStr: string) => {
  console.log(limit, subStr);
  return await User.findAll({
    where: { login: { [Op.substring]: subStr } },
    limit: limit
  });
};
