import { Request, Response } from 'express';
import UserService from '../../services/UserService';

const userService = new UserService();

export const getUserById = async (req: Request, res: Response) => {
  const id = req.params.id;
  try {
    const foundUser = await userService.getUserById(id);
    if (!foundUser) {
      return res.status(400).json({ message: `No User Found with ID: ${id}` });
    }
    return res.status(200).json({ User: foundUser });
  } catch (err: any) {
    return res.status(400).json({ Error: err.message });
  }
};

export const createUser = async (req: Request, res: Response) => {
  const userDTO = req.body;
  try {
    const newUser = await userService.createUser(userDTO);
    return res.status(201).json({ NewUser: newUser });
  } catch (err: any) {
    return res.status(400).json({ Error: err.message });
  }
};

export const updateUser = async (req: Request, res: Response) => {
  const id = req.params.id;
  const userTDO = req.body;
  try {
    const updatedUser = await userService.updateUser(id, userTDO);
    return res.status(200).json({ updatedUser });
  } catch (err: any) {
    return res.status(400).json({ Error: err.message });
  }
};

export const deleteUser = async (req: Request, res: Response) => {
  const id = req.params.id;
  try {
    await userService.deleteUser(id);
    return res.status(200).json({ message: `User has been soft-deleted` });
  } catch (err: any) {
    return res.status(400).json({ Error: err.message });
  }
};

export const getAutoSuggestUsers = async (req: Request, res: Response) => {
  try {
    const limit: number = parseInt(req.params.limit);
    const subStr = req.params.subStr;
    const foundUsers = await userService.getAutoSuggestUsers(limit, subStr);
    return res.status(200).json({ foundUsers });
  } catch (err: any) {
    return res.status(400).json({ Error: err.message });
  }
};
