import {Request, Response} from 'express';
import {mockData} from '../../data/mockData';

export const getUserById = (req: Request, res: Response) => {
    const userID = req.params.id;
    const foundUser = mockData.find((user) => user.id === userID);
    res.json({user: foundUser})
}